import { FC, useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Input } from "@mantine/core";
import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import { getRoutePath } from "bot/routes/utils";
import { PathNames, Bot } from "bot/helpers/types";
import { useStoreState, useActions } from "bot/helpers/store";

type Props = {
    botId: string | null;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BotForm: FC<Props> = ({ botId, setIsOpened }) => {
    const axiosInstance = getAxiosInstance("multipart/form-data");
    const navigator = useNavigate();

    const form = useForm<{ name: string; img: File }>({
        initialValues: {
            name: "",
            img: null,
        },
    });

    const [botData, setBotData] = useState<Bot | null>(null);

    const bots = useStoreState((state) => state.defaultStore.bots);
    const setBots = useActions((actions) => actions.defaultStore.setBots);

    const onSubmitHandler = (values: typeof form.values, event: React.FormEvent<Element>) => {
        event.preventDefault();
        if (!botId) {
            axiosInstance
                .post("/bots/", values)
                .then((response) => {
                    if (response.status === 201) {
                        navigator(getRoutePath(PathNames.botsWorkspace).replace(":botId", response.data.id));
                    }
                })
                .catch((error) => console.log(error));
        } else {
            axiosInstance.patch(`/bots/${botId}/`, values).then((response) => {
                if (response.status === 200) {
                    const newBots = bots.reduce((result, current) => {
                        if (current.id === botId) {
                            current.img = response.data.img;
                            current.name = response.data.name;
                        }
                        result.push(current);
                        return result;
                    }, [] as Bot[]); // update the global state
                    setBots(newBots);
                    setIsOpened(false);
                }
            });
        }
    };

    const onImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const file = input.files[0];
        form.setFieldValue("img", file);
    };

    useEffect(() => {
        if (botId && botData === null) {
            axiosInstance
                .get(`/bots/${botId}`)
                .then((response) => {
                    const data: Bot = response.data;
                    setBotData(data); // just to show imge in preview
                    form.setFieldValue("name", data.name);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [botId, form]);

    return (
        <>
            <form onSubmit={form.onSubmit((values, event) => onSubmitHandler(values, event))}>
                <TextInput label="Name" required {...form.getInputProps("name")} />
                <Input type="file" accept="image/*" required onChange={onImageChangeHandler} />
                {botData && <img src={botData.img} width="300px" />}
                <Button fullWidth type="submit" className="mt-1">
                    Create
                </Button>
            </form>
        </>
    );
};

export default BotForm;

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "@mantine/core";
import { getAxiosInstance } from "helpers/AxiosInstance";
import { useActions, useStoreState } from "helpers/store";
import BotForm from "routes/BotsDashboard/BotForm";
import { getRoutePath } from "routes";
import { PathNames, Bot } from "helpers/types";

export const BotsDashboard: FC = () => {
    enum Buttons {
        edit = "Edit",
        view = "View",
        delete = "Delete",
    }

    const axiosInstance = getAxiosInstance();
    const navigator = useNavigate();

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [botId, setBotId] = useState<string | null>(null);
    const bots = useStoreState((state) => state.defaultStore.bots);

    const setBots = useActions((actions) => actions.defaultStore.setBots);

    const botsWorkspacePath = (id: string) => getRoutePath(PathNames.botsWorkspace).replace(":botId", id);

    const onCreateClickHandler = (e) => {
        e.preventDefault();
        setIsOpened(true);
    };

    const onClickHandler = (button: Buttons, id: string) => {
        switch (button) {
            case Buttons.view:
                navigator(botsWorkspacePath(id));
                break;
            case Buttons.edit:
                setIsOpened(true);
                setBotId(id);
                break;
            case Buttons.delete:
                const isDelete = window.confirm("Do you want to delete?");
                isDelete &&
                    axiosInstance
                        .delete(`/bots/${id}/`)
                        .then((response) => {
                            if (response.status === 204) {
                                const newBots = bots.reduce((result, current) => {
                                    if (current.id !== id) result.push(current);
                                    return result;
                                }, [] as Bot[]);
                                setBots(newBots);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                break;
        }
    };

    const onModelCloseHandler = () => {
        setIsOpened(!isOpened);
        setBotId(null);
    };

    useEffect(() => {
        axiosInstance.get("/bots/").then((response) => {
            response.status === 200 && setBots(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>Bot Dashboard</h1>
            <Button size="lg" onClick={onCreateClickHandler}>
                + Create new bot
            </Button>
            <hr />
            <div className="bots">
                {bots.length !== 0 &&
                    bots.map((bot) => (
                        <Card className="bot" key={bot.id}>
                            <div className="details">
                                <img src={bot.img} alt="bot avatar" width="100" />
                                <h1>{bot.name}</h1>
                            </div>
                            <div className="options">
                                <Button onClick={() => onClickHandler(Buttons.edit, bot.id)}>Edit</Button>
                                <Button color="yellow" onClick={() => onClickHandler(Buttons.view, bot.id)}>
                                    View
                                </Button>
                                <Button color="red" onClick={() => onClickHandler(Buttons.delete, bot.id)}>
                                    Delete
                                </Button>
                            </div>
                        </Card>
                    ))}
            </div>
            <Modal
                opened={isOpened}
                onClose={onModelCloseHandler}
                overlayOpacity={0.55}
                overlayBlur={3}
                title="Create new bot"
            >
                <BotForm botId={botId} setIsOpened={setIsOpened} />
            </Modal>
        </div>
    );
};

export default BotsDashboard;

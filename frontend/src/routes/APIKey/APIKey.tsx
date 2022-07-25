import { FC, useState } from "react";
import { Button, Modal, Code } from "@mantine/core";
import { getAxiosInstance } from "helpers/AxiosInstance";

const APIKey: FC = () => {
    const axios = getAxiosInstance();

    const [modalState, setModalState] = useState<{ isOpened: boolean; key: string }>({
        isOpened: false,
        key: "",
    });

    const onButtonClickHandler = () => {
        axios
            .post("/user/generate-key/")
            .then((response) => {
                if (response.status === 200) {
                    setModalState((value) => ({
                        key: response.data.key,
                        isOpened: true,
                    }));
                }
            })
            .then((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h1>
                You can see the generated api key only once. When you generate a new key the old one is
                automatically revoked!
            </h1>
            <Button onClick={onButtonClickHandler}>Generate</Button>
            <Modal
                title="Your api key"
                opened={modalState.isOpened}
                onClose={() =>
                    setModalState((value) => ({
                        ...value,
                        isOpened: !value.isOpened,
                    }))
                }
                centered
            >
                <div className="modal-contents">
                    <Code>{modalState.key}</Code>
                </div>
            </Modal>
        </div>
    );
};

export default APIKey;

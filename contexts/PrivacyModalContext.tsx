import { createContext, FunctionComponent, PropsWithChildren, useContext, useState } from "react";

const UNINITALIZED = (): void => {
	throw new Error("Function not yet initalized.");
};

interface PrivacyModalInterface {
	isPrivacyModalVisible: boolean;
	setPrivacyModalVisible: (s: boolean) => void;
}

const INITAL_CONTEXT = {
	isPrivacyModalVisible: false,
	setPrivacyModalVisible: UNINITALIZED
};

const PrivacyModal = createContext<PrivacyModalInterface>(INITAL_CONTEXT);

export const usePrivacyModal = () => useContext(PrivacyModal);

export const PrivacyModalProvider: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	const [isPrivacyModalVisible, setPrivacyModalVisible] = useState<boolean>(false);

	return <PrivacyModal.Provider value={{ isPrivacyModalVisible, setPrivacyModalVisible }}>{children}</PrivacyModal.Provider>;
};

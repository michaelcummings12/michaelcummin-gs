import { FunctionComponent } from "react";
import { usePrivacyModal } from "../../contexts/PrivacyModalContext";
import { PrivacyView } from "../../views";
import Modal from "../Modal";

export const PrivacyModal: FunctionComponent = () => {
	const { isPrivacyModalVisible, setPrivacyModalVisible } = usePrivacyModal();

	return (
		<Modal setActive={() => setPrivacyModalVisible(false)} isActive={isPrivacyModalVisible}>
			<PrivacyView />
		</Modal>
	);
};

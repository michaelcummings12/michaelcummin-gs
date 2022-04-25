import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

type ContactFormData = {
	email: string;
	message: string;
	name: string;
	timestamp?: number;
};

const ContactAPI = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		let data: ContactFormData = req.body;
		data.timestamp = Date.now();

		try {
			await addDoc(collection(firestore, "contact_form"), data);
			console.log("Document written to firestore.");
			res.statusCode = 201;
			res.json({ success: true });
			res.end();
		} catch (err) {
			console.error(`Error writing to firestore. ${JSON.stringify(err)}`);
			res.statusCode = 500;
			res.json({ success: false });
			res.end();
		}
	}
};

export default ContactAPI;

import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { firestore } from "../../../lib/firebase";

type ContactFormData = {
	email: string;
	message: string;
	name: string;
	timestamp?: number;
};

export const POST = async (request: NextRequest) => {
	const data = (await request.json()) as ContactFormData;
	data.timestamp = Date.now();

	try {
		await addDoc(collection(firestore, "contact_form"), data);
		console.log("Document written to firestore.");
		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(`Error writing to firestore. ${JSON.stringify(err)}`);
		return NextResponse.json({ success: false });
	}
};

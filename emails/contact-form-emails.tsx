import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

import { ContactFormEmailProps } from "@/lib/types";

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>New Message from your porfolio site</Preview>
			<Tailwind>
				<Body className="bg-slate-100">
					<Container>
						<Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
							<Heading className="leading-tight text-black">
								You received the following message from the
								contact form
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender's email is: {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmail;

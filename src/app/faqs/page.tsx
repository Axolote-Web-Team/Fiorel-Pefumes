import { Stack, Typography } from '@mui/material';
import { faqsElements } from '../components/utils'; // TODO: Delete when DB is implemented
import { AccordionFAQ } from '../components/atoms';
import { Layout } from '../components/organisms';

export default function FAQsPage(): JSX.Element {
	// TODO: Add FAQs from DB

	return (
		<Layout>
			<Stack spacing={4} p={4}>
				<Typography variant='h1'>Preguntas Frecuentes</Typography>
				<Stack spacing={2}>
					{faqsElements.length !== 0 ? (
						faqsElements.map((faq, index) => (
							<AccordionFAQ
								key={index}
								title={faq.title}
								description={faq.description}
							/>
						))
					) : (
						<Typography>
							La página es tan buena que nadie tiene dudas 😎
						</Typography>
					)}
				</Stack>
			</Stack>
		</Layout>
	);
}

import Accordion from "../components/Accordion"

function AccordionPage() {

	const items = [
		{
			id: 'lkasdsa',
			label: 'Can I use React on a project?',
			content: 'You can use React at any projects, you want'
		},
		{
			id: 'lkasdsadas',
			label: 'Can I use JavaScript on a project?',
			content: 'You can use JavaScript at any projects, you want'
		},
		{
			id: 'lkasdsadasdasd',
			label: 'Can I use CSS on a project?',
			content: 'You can use CSS at any projects, you want'
		}
	];

	return <Accordion items={items} />;
}

export default AccordionPage

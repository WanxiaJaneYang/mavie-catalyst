// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse, delay } from 'msw';
import loginSuccessResponse from '../responses/loginSuccessRes/loginSuccessRes.json';
import loginFailResponse from '../responses/loginFailRes/loginFailRes.json';

const scenario = process.env.REACT_APP_TEST_SCENARIO;

const handlers = [
	http.post('/login', async () => {
		await delay(1000);
		if (scenario === 'success') {
			return HttpResponse.json(
				{
					user_id: '20296000000074005',
					productList: [
						{
							id: '20296000000089007',
							name: 'Samsung S23',
						},
						{
							id: '20296000000087123',
							name: 'Manual Jar Opener',
						},
						{
							id: '20296000000087117',
							name: 'Microband',
						},
						{
							id: '20296000000087107',
							name: 'Air Fryer',
						},
						{
							id: '20296000000087097',
							name: 'Automatic Jar Opener',
						},
						{
							id: '20296000000087063',
							name: 'Automatic Can opener II',
						},
						{
							id: '20296000000087049',
							name: '4K TV',
						},
						{
							id: '20296000000077013',
							name: 'Washing Machine',
						},
						{
							id: '20296000000071020',
							name: 'Kettle Black',
						},
						{
							id: '20296000000067092',
							name: 'Kettle Chrome',
						},
						{
							id: '20296000000058125',
							name: 'Washing Machine',
						},
						{
							id: '20296000000048003',
							name: 'Test Oven',
						},
						{
							id: '20296000000042761',
							name: 'Big Stove XYZ',
						},
						{
							id: '20296000000020041',
							name: 'LG microwave',
						},
					],
				},
			);
		}
		return new HttpResponse(
			{ erorr: 'email or password is incorrect' },
			// null,
			{ statusText: 'Unauthorized', status: '401' },
		);
	}),

	http.get('/product/:productId', ({ params }) => {
		const { productId } = params;
		if (productId === '20296000000089007') {
			return HttpResponse.json({
				brand: 'Samsung',
				brandIcon: '',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
				image: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98c5b19679b264a949e436271256ae32d',
				modelName: 'Samsung S23',
				productCategoryName: 'Phones',
				expertOpinion: 'This is an expert opinion of this product',
				overallRating: '2.10',
			});
		}

		return HttpResponse.json({
			brand: '',
			brandIcon: '',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			image: 'https://previewengine.zohopublic.com.au/image/WD/87opqd88416571b334c348a5f43b35b6ed32d',
			modelName: 'Manual Jar Opener',
			expertOpinion: 'test',
			overallRating: '4.33',
		});
	}),

	http.get('/product/:productId/filter', ({ params }) => {
		const { productId } = params;
		if (productId === '20296000000089007') {
			return HttpResponse.json({
				features: [
					{
						id: '20296000000020023',
						name: 'Readability',
						importance: '3',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f5dd68e0f684476c9d059b7f136628e4',
						description: 'This section is intended to gather your feedback on the Readability of the product.Readability refers to the ease with which users can read and understand the information displayed on a product, encompassing text, buttons, and icons. The following statements are used to gauge the readability of the text on a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000020027',
						name: 'Buttons',
						importance: '4',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c8e315005b384bb09318d4bc78217d1a',
						description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000020031',
						name: 'Language',
						importance: '3',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9425a15d4899e4e4094cf8ab2a7ec6d17',
						description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032223',
						name: 'Grip and Twist-Friendliness',
						importance: '2',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd908110eee70f14e9e8df38cf0c70018dc',
						description: "This section is intended to gather your feedback on Grip and Twist-Friendliness of the product.Grip and Twist-Friendliness refers to the ease with which users can hold, interact with, and operate the product. It also encompasses the product's ability to prevent discomfort, slipping, and the need for excessive strength during use. The following statements are used to assess the grip and twist friendliness of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032395',
						name: 'Sturdiness',
						importance: '5',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98c5d664287a44ec39355310fa20c5c6a',
						description: 'This section is intended to gather your feedback on the Sturdiness the product.Sturdiness refers to both the stability and strength of the product, assessing how robust and dependable it feels during use. The following statements gauge the sturdiness as a feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032227',
						name: 'Size and Weight of Product',
						importance: '5',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9408ab8e6a7374046a3a61e77495b2620',
						description: 'This section is intended to gather your feedback on the Size and Weight of the product.Size and Weight refers to the dimensions and the heaviness of the product and should be considered in relation to its intended purpose and usage, particularly in comparison to similar products with the same function. The following statements are used to assess the size and weight feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000076003',
						name: 'Overall Readability',
						importance: '3',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c939d9d3e3a54f198a5d06aa7e740d2b',
						description: '',
					},
					{
						id: '20296000000032231',
						name: 'Perceived Usefulness',
						importance: '4',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd990287b2f99e644258c8a18ed71a8b1ff',
						description: 'This section is intended to gather your feedback on the Perceived Usefulness of the product. Perceived usefulness refers to how efficient, effective, and/ or helpful the product is considered to be. The following statements are used to gauge the perceived usefulness of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032235',
						name: 'Multimodal Feedback',
						importance: '3',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9daab01aaa752493fb4b329df664fb5c3',
						description: 'This section is intended to gather your feedback on the Multimodal Feedback of the product.Multimodal Feedback refers to products that utilise various channels, including auditory, visual, and tactile (such as vibration) cues, to alert users. The following statements are used to gauge multimodal feedback of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032239',
						name: 'Ease-of-Instructions',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cf05f96950a84f06aa82de08625b13ef',
						description: "This section is intended to gather your feedback on the Ease of Instruction of the product.Ease of InstructionEase of Instruction refers to the user's capability to understand the directions provided by and or with, the product. This can include markings on the product as well as physical and digital instruction manuals. Consideration should also be given not just to the presence of instructions but also their usability and helpfulness.The following statements are used to assess the Ease of Instruction of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032243',
						name: 'Simple and Intuitive Design',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9544af037df6f46368c11aa6a281b6e5f',
						description: "This section is intended to gather your feedback on the Simple and Intuitive Design of the product.Simple and Intuitive Design refers to whether the product is easy to understand and navigate, without requiring detailed instructions or training. The following statements are used to gauge the simplicity and intuitiveness of the product's design. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032247',
						name: 'Minimal Learning Curve',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9044c3af3e0e74f9e81931f51c9b83580',
						description: 'This section is intended to gather your feedback on the Minimal Learning Curve of the product.Minimal Learning Curve refers to the ease with which the product can be understood and operated, without necessitating extensive training or prior experience. The following statements are used to assess the learning curve of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032251',
						name: 'Independent Usage',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9a4b8a1a6f13b4096811163a2fd211e98',
						description: "This section is intended to gather your feedback on the Independent Usage of the product.Independent Usage refers to the product's ease of understanding and use without requiring assistance from others. The following statement is used to gauge the independent usage of the product. Please read it carefully and provide your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032255',
						name: 'Recognition-Based Design',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9dec4a25a6b9544fabf3480b347f52fa5',
						description: 'This section is intended to gain your feedback on Recognition-Based Design of the product. Recognition-Based Design emphasises recognition over recall. It means the design of the product minimises the amount of effort required for users to interact with it by relying on familiar visual cues and patterns instead of recalling specific information from memory. The following statement is used to measure recognition-based design of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032259',
						name: 'Ease of Set-Up',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9bcaf241598cd44598750b1e34018dc54',
						description: 'This section is intended to gather your feedback on the Ease of Set Up as a feature of a product. Ease of Set Up refers to whether the design of the product is simple and easy to set up in terms of time, expertise and materials. Some products require common materials like batteries to complete the set up. Products might have an easy set up if they need a professional for installation. The following statements are used to measure recognition-based design of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032263',
						name: 'Customisation',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd99625fc19520d4da1aa46ac562a49d08f',
						description: 'This section is intended to gather your feedback on the Customisation of the product.Customisation refers to the option for users to personalise products. The following statements are used to measure the customisation as a feature of the product. Please read them carefully and indicate your feedback.Now that you have rated the customisation as a feature of the product, please indicate its importance for the product on a scale of 1 to 5:',
					},
					{
						id: '20296000000032267',
						name: 'Aesthetic Design',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9268d138dd31c47f8a27303cde8ae853f',
						description: 'This section is intended to gather your feedback on the Aesthetic Design of the product. Aesthetic Design refers to how the product looks.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032271',
						name: 'Contrast and Visibility',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd97d6a90f748b44953be17182ece9d45d7',
						description: 'This section is intended to gather your feedback on the Contrast and Visibility of the product. Contrast and visibility refers to how the product looks in terms of colours and materials, and how these distinguish the product from the environment, and or different product components from each other. Visibility can be achieved through colours and/ lights. The following statements are used to measure the contrast and visibility of the product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032275',
						name: 'Stigma',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd930b1ac75925d42a0ac8d0577b78e6b9d',
						description: 'This section is intended to gather your feedback on the Stigma of the product. Stigma refers to the negative perception of a product or the user of the product. Stigma can make a product undesirable or unappealing. The following statements are used to measure the stigma of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032279',
						name: 'Switching-off Automatically',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9a63790915fb84166ba095041a182923f',
						description: 'This section is intended to gather your feedback on the Switching-Off Automatically of the product. Switching-Off Automatically refers to safety feature that ensures the product will turn off automatically after a set period of time, reducing the risk of accidents and injuries. The following statement is used to measure the feature of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032283',
						name: 'Products with Cords',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d54aa8fbaa9749d097d9c56dfbc301c4',
						description: 'This section is intended to gather your feedback on the product with a cord. Cordless Product refers to a product using alternative mechanisms to access power, including wireless charging and using batteries. A product may still advertise as cordless even if a cord is required to recharge the product in the case of wireless charging. The following statements are used to assess this feature of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032287',
						name: 'Sharp and/or Hazardous Materials',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cffaa0ebc1c3406099c84a742a84a27c',
						description: 'This section is intended to gather your feedback on the Sharpness and or Hazardous Materials of the product.Sharp and or Hazardous Materials refers to where they are not absolutely necessary not function of the product. While some products do require sharp edges (e.g. knives) or contain hazardous materials (e.g. cleaning products containing bleach), these are not considered in this category or their containers may be considered in place. The following questions are used to measure this feature of a product. Please read them carefully and indicate your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032291',
						name: 'Locking Mechanism',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c97f0f944393417aa86980483d6c6d4d',
						description: "This section is intended to gather your feedback on the Locking Mechanism of the product.The Locking Mechanism refers the product's capacity to limit access, either to the product itself or to various users. These mechanisms can include both physical and digital forms, especially in the context of smart products. The following questions are used to assess this feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032295',
						name: 'Slip-Resistant Design',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92807eabd617a4aa5af84f49a77dcc97a',
						description: 'This section is intended to gather your feedback on the Slip-Resistant Design of the product.A Slip-resistant design refers to different features, including non-slip surfaces, textures, or materials that enhance grip and traction. The following questions are used to gauge this feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032299',
						name: 'Indicators',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9097f4771fd24405eb9ae6b5f7d2c6884',
						description: "This section is intended to gather your feedback on the Indicators feature of the product.Indicators refer to the product's capability to effectively signal its operational status - whether it's on or off, locked, or in any other state that might influence its safe usage. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032303',
						name: 'Safe to Move the Product',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd96da0ba7189774741babdfd648325d175',
						description: "This section is intended to gather your feedback on Safety to Move the Product. Safe to Move the product refers to the product's capability to be safely moved, especially for products that might undergo frequent movement. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.For this question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032307',
						name: 'Ease of Cleaning',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd93cbe832acb564e7d9768c7a2c15bd5e4',
						description: "This section is intended to gather your feedback on Ease of Cleaning of the product. Ease of Cleaning refers to the user's ability to effectively clean and upkeep the product. This includes cleaning both external and internal components, such as filters, where applicable. The following questions are used to assess the ease of cleaning of a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032311',
						name: 'Durability',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9ddee23ab7c4f4b36b3cd37fc6ee756be',
						description: 'This section is intended to gather your feedback on the Durability of the product. Durability refers to the expected lifespan of the product during typical usage, which includes enduring regular cleaning. The following questions are used to assess durability of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032315',
						name: 'Accessibility of Components',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9af5a40c712d54eb7b1011a1027a93a9c',
						description: "This section is intended to gather your feedback on the Accessibility of Components of the product. Accessibility of Components refers to a user's ability to conveniently reach all parts requiring cleaning or maintenance. This includes features like removable or easy-to-open covers and compartments. The following questions are used to assess the Accessibility of Components of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032319',
						name: 'Safety Considerations',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92b28ba96a75145a79a6d7eccb26c7239',
						description: "This section is intended to gather your feedback on the Safety Considerations of the product. Safety Considerations refers to whether a product's design prioritises user safety during cleaning and maintenance. For example, it addresses whether there are any sharp edges or hazardous materials that could cause injury if mishandled. The following questions are used to measure the Safety Considerations of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032323',
						name: 'Compatibility with Cleaning Products',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c6cf99fb7d3143efa2eabf6dd6b4dc72',
						description: "This section is intended to gather your feedback on the product's Compatibility with Cleaning Products. Compatibility with Cleaning Products refers to whether a product's design ensures user safety during cleaning and maintenance. This involves considering factors like the presence of sharp edges or hazardous materials that could lead to injury if mishandled. The following question is used to gauge the product's compatibility with cleaning products. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032327',
						name: 'Maintenance Requirements',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9998c960801d2423cbb58b2cda5d4853b',
						description: 'This section is intended to gather your feedback on the Maintenance Requirements of the product.Maintenance Requirements for the product can differ based on the product type and its usage. Certain products might require regular maintenance tasks such as lubricating moving parts or replacing worn components, while others could require less frequent maintenance or none at all. The following statements are used to assess the Maintenance Requirements of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032331',
						name: 'Availability of Replacement Parts',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c09208f3c92e497b92bddc595d1f7e84',
						description: "This section is intended to gather your feedback on the Availability of Replacement Parts for the product.Availability of Replacement Parts is significant as the accessibility and cost of replacement parts can influence the product's lifespan and the user's capability to maintain it over time. The following statement is used to gauge the availability of replacements parts for the product. Please read it carefully and provide your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032335',
						name: 'Parts Warranty',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9bc504f2a8dce4564bce29494b5200b40',
						description: 'This section is intended to gather your feedback on the Parts Warranty of the product. Parts Warranty refers to the length and extent of warranties covering both the product as a whole and its individual parts. This includes items like filters, motors and rechargeable batteries. The following statements are used to gauge the Parts Warranty of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032339',
						name: 'Readability of Packaging',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f0e637dbc416457490b14405e107c450',
						description: "This section is intended to gather your feedback on the Readability of Packaging of the product.Readability of Packaging refers to any text or symbols present on the product's packaging. This involves assessing factors such as the text's size and font, as well as the choice of language and symbols used. The following statement is used to gauge the Readability of Packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032343',
						name: 'Easy Opening and Closing',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d417ca7f31284d3dbfa7ea3fcbc0a502',
						description: "This section is intended to gather your feedback on Easy Opening and Closing of the product's packaging.Easy Opening and Closing of the product's packaging refers to the accessibility of the product within the packaging, assessing whether it can be accessed with ease and independence. The following statements are used to gauge the ease of opening and closing the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032347',
						name: 'Size and Weight of Packaging',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd932b3d91c9e8f4225abda325849e66858',
						description: "This section is intended to gather your feedback on the Size and Weight of packaging of the product.The Size and Weight of packaging refers to whether the product's packaging is reasonable and appropriate considering the product's size, weight and fragility. The following statement is used to assess the Size and Weight of packaging of the product. Please read it carefully and indicate your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032351',
						name: 'Materials of Packaging',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cee51f6e36064f44a1a8b9af8cf00edd',
						description: 'This section is intended to gather your feedback on Materials of Packaging used for the product.Materials of Packaging refers to the specific type of packaging material used for the product (e.g., hard plastic, Styrofoam). The following statements are used to assess the materials used in the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032355',
						name: 'Stigma Associated with Packaging',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98a7433b5094e4278bad471ba4a4f4665',
						description: 'This section is intended to gather your feedback on the Stigma Associated with Packaging of the product.Stigma associated with packaging involves a negative perception of either the product itself or its users, based on the packaging. This impression might arise from the words, symbols or images displayed on the packaging. The following statements are used to assess the potential stigma associated with the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032359',
						name: 'Aesthetic Design of Packaging',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9fb659a1716b24f6792de84ca52a9f7cc',
						description: "This section is intended to gather your feedback on the Aesthetic Design of Packaging for the product.Aesthetic Design of Packaging refers to the visual appearance of the product's packaging, including factors such as colours, images and even the shape of the packaging. The following statement is used to assess the aesthetic design of the packaging for the product. Please read it carefully and indicate your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
					},
					{
						id: '20296000000032363',
						name: 'Perceived Value for Money',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9de5eff1e66b24e138f4e5b689853a9f5',
						description: 'no description provided',
					},
					{
						id: '20296000000070017',
						name: 'Overall Product Rating',
						importance: 0,
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd993d1ef8993bb4f469763e4bf5fa6f12e',
						description: 'no description provided',
					},
				],
				domains: [
					{
						id: '20296000000032391',
						name: 'Ergonomics',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9e57910d86ddb492e9d400096590acf7c',
						roundIcon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd99d0fa23673f643c9996d26a47142141a',
						featureIds: [
							'20296000000020023',
							'20296000000020027',
							'20296000000020031',
							'20296000000032223',
							'20296000000032395',
							'20296000000032227',
							'20296000000076003',
						],
						importance: 0,
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
					},
					{
						id: '20296000000032387',
						name: 'Usefulness',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92d245b490d8e4915a194a5335aba7896',
						roundIcon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9421683fb6e81422da167a06c2547d32c',
						featureIds: [
							'20296000000032231',
							'20296000000032235',
						],
						importance: 0,
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
					},
				],
				personas: [
					{
						id: '1',
						name: 'Able',
						icon: 'https://svgshare.com/i/119V.svg',
						roundButtonSelected: 'https://svgshare.com/i/1191.svg',
						roundButtonUnselected: 'https://svgshare.com/i/1192.svg',
						description: 'no description',
					},
					{
						id: '2',
						name: 'Hearing',
						icon: 'https://svgshare.com/i/1193.svg',
						roundButtonSelected: 'https://svgshare.com/i/119C.svg',
						roundButtonUnselected: 'https://svgshare.com/i/119N.svg',
						description: 'no description',
					},
					{
						id: '3',
						name: 'Cognitive',
						icon: 'https://svgshare.com/i/119M.svg',
						roundButtonSelected: 'https://svgshare.com/i/119A.svg',
						roundButtonUnselected: 'https://svgshare.com/i/119B.svg',
						description: 'no description',
					},
					{
						id: '4',
						name: 'Language',
						icon: 'https://svgshare.com/i/118d.svg',
						roundButtonSelected: 'https://svgshare.com/i/119P.svg',
						roundButtonUnselected: 'https://svgshare.com/i/11AP.svg',
						description: 'no description',
					},
					{
						id: '5',
						name: 'Vision',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d00de6ef2c0a497282ec20d8a750f33a',
						roundButtonSelected: 'https://svgshare.com/i/119h.svg',
						roundButtonUnselected: 'https://svgshare.com/i/11AZ.svg',
						description: 'no description',
					},
					{
						id: '6',
						name: 'Mobility',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd981d5e5e39cce4efebf6d45cc69ac4b75',
						roundButtonSelected: 'https://svgshare.com/i/11A2.svg',
						roundButtonUnselected: 'https://svgshare.com/i/11A_.svg',
						description: 'no description',
					},
				],
				ageRange: {
					minAge: 18,
					maxAge: 65,
				},
			});
		}

		return HttpResponse.json({
			features: [
				{
					id: '20296000000020023',
					name: 'Readability',
					importance: '1',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f5dd68e0f684476c9d059b7f136628e4',
					description: 'This section is intended to gather your feedback on the Readability of the product.Readability refers to the ease with which users can read and understand the information displayed on a product, encompassing text, buttons, and icons. The following statements are used to gauge the readability of the text on a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000020027',
					name: 'Buttons',
					importance: '0',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c8e315005b384bb09318d4bc78217d1a',
					description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000020031',
					name: 'Language',
					importance: '0',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9425a15d4899e4e4094cf8ab2a7ec6d17',
					description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032223',
					name: 'Grip and Twist-Friendliness',
					importance: '5',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd908110eee70f14e9e8df38cf0c70018dc',
					description: "This section is intended to gather your feedback on Grip and Twist-Friendliness of the product.Grip and Twist-Friendliness refers to the ease with which users can hold, interact with, and operate the product. It also encompasses the product's ability to prevent discomfort, slipping, and the need for excessive strength during use. The following statements are used to assess the grip and twist friendliness of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032395',
					name: 'Sturdiness',
					importance: '5',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98c5d664287a44ec39355310fa20c5c6a',
					description: 'This section is intended to gather your feedback on the Sturdiness the product.Sturdiness refers to both the stability and strength of the product, assessing how robust and dependable it feels during use. The following statements gauge the sturdiness as a feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032227',
					name: 'Size and Weight of Product',
					importance: '4',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9408ab8e6a7374046a3a61e77495b2620',
					description: 'This section is intended to gather your feedback on the Size and Weight of the product.Size and Weight refers to the dimensions and the heaviness of the product and should be considered in relation to its intended purpose and usage, particularly in comparison to similar products with the same function. The following statements are used to assess the size and weight feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000076003',
					name: 'Overall Readability',
					importance: '0',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c939d9d3e3a54f198a5d06aa7e740d2b',
					description: '',
				},
				{
					id: '20296000000032231',
					name: 'Perceived Usefulness',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd990287b2f99e644258c8a18ed71a8b1ff',
					description: 'This section is intended to gather your feedback on the Perceived Usefulness of the product. Perceived usefulness refers to how efficient, effective, and/ or helpful the product is considered to be. The following statements are used to gauge the perceived usefulness of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032235',
					name: 'Multimodal Feedback',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9daab01aaa752493fb4b329df664fb5c3',
					description: 'This section is intended to gather your feedback on the Multimodal Feedback of the product.Multimodal Feedback refers to products that utilise various channels, including auditory, visual, and tactile (such as vibration) cues, to alert users. The following statements are used to gauge multimodal feedback of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032239',
					name: 'Ease-of-Instructions',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cf05f96950a84f06aa82de08625b13ef',
					description: "This section is intended to gather your feedback on the Ease of Instruction of the product.Ease of InstructionEase of Instruction refers to the user's capability to understand the directions provided by and or with, the product. This can include markings on the product as well as physical and digital instruction manuals. Consideration should also be given not just to the presence of instructions but also their usability and helpfulness.The following statements are used to assess the Ease of Instruction of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032243',
					name: 'Simple and Intuitive Design',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9544af037df6f46368c11aa6a281b6e5f',
					description: "This section is intended to gather your feedback on the Simple and Intuitive Design of the product.Simple and Intuitive Design refers to whether the product is easy to understand and navigate, without requiring detailed instructions or training. The following statements are used to gauge the simplicity and intuitiveness of the product's design. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032247',
					name: 'Minimal Learning Curve',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9044c3af3e0e74f9e81931f51c9b83580',
					description: 'This section is intended to gather your feedback on the Minimal Learning Curve of the product.Minimal Learning Curve refers to the ease with which the product can be understood and operated, without necessitating extensive training or prior experience. The following statements are used to assess the learning curve of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032251',
					name: 'Independent Usage',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9a4b8a1a6f13b4096811163a2fd211e98',
					description: "This section is intended to gather your feedback on the Independent Usage of the product.Independent Usage refers to the product's ease of understanding and use without requiring assistance from others. The following statement is used to gauge the independent usage of the product. Please read it carefully and provide your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032255',
					name: 'Recognition-Based Design',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9dec4a25a6b9544fabf3480b347f52fa5',
					description: 'This section is intended to gain your feedback on Recognition-Based Design of the product. Recognition-Based Design emphasises recognition over recall. It means the design of the product minimises the amount of effort required for users to interact with it by relying on familiar visual cues and patterns instead of recalling specific information from memory. The following statement is used to measure recognition-based design of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032259',
					name: 'Ease of Set-Up',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9bcaf241598cd44598750b1e34018dc54',
					description: 'This section is intended to gather your feedback on the Ease of Set Up as a feature of a product. Ease of Set Up refers to whether the design of the product is simple and easy to set up in terms of time, expertise and materials. Some products require common materials like batteries to complete the set up. Products might have an easy set up if they need a professional for installation. The following statements are used to measure recognition-based design of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032263',
					name: 'Customisation',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd99625fc19520d4da1aa46ac562a49d08f',
					description: 'This section is intended to gather your feedback on the Customisation of the product.Customisation refers to the option for users to personalise products. The following statements are used to measure the customisation as a feature of the product. Please read them carefully and indicate your feedback.Now that you have rated the customisation as a feature of the product, please indicate its importance for the product on a scale of 1 to 5:',
				},
				{
					id: '20296000000032267',
					name: 'Aesthetic Design',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9268d138dd31c47f8a27303cde8ae853f',
					description: 'This section is intended to gather your feedback on the Aesthetic Design of the product. Aesthetic Design refers to how the product looks.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032271',
					name: 'Contrast and Visibility',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd97d6a90f748b44953be17182ece9d45d7',
					description: 'This section is intended to gather your feedback on the Contrast and Visibility of the product. Contrast and visibility refers to how the product looks in terms of colours and materials, and how these distinguish the product from the environment, and or different product components from each other. Visibility can be achieved through colours and/ lights. The following statements are used to measure the contrast and visibility of the product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032275',
					name: 'Stigma',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd930b1ac75925d42a0ac8d0577b78e6b9d',
					description: 'This section is intended to gather your feedback on the Stigma of the product. Stigma refers to the negative perception of a product or the user of the product. Stigma can make a product undesirable or unappealing. The following statements are used to measure the stigma of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032279',
					name: 'Switching-off Automatically',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9a63790915fb84166ba095041a182923f',
					description: 'This section is intended to gather your feedback on the Switching-Off Automatically of the product. Switching-Off Automatically refers to safety feature that ensures the product will turn off automatically after a set period of time, reducing the risk of accidents and injuries. The following statement is used to measure the feature of a product. Please read them carefully and indicate your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032283',
					name: 'Products with Cords',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d54aa8fbaa9749d097d9c56dfbc301c4',
					description: 'This section is intended to gather your feedback on the product with a cord. Cordless Product refers to a product using alternative mechanisms to access power, including wireless charging and using batteries. A product may still advertise as cordless even if a cord is required to recharge the product in the case of wireless charging. The following statements are used to assess this feature of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032287',
					name: 'Sharp and/or Hazardous Materials',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cffaa0ebc1c3406099c84a742a84a27c',
					description: 'This section is intended to gather your feedback on the Sharpness and or Hazardous Materials of the product.Sharp and or Hazardous Materials refers to where they are not absolutely necessary not function of the product. While some products do require sharp edges (e.g. knives) or contain hazardous materials (e.g. cleaning products containing bleach), these are not considered in this category or their containers may be considered in place. The following questions are used to measure this feature of a product. Please read them carefully and indicate your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032291',
					name: 'Locking Mechanism',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c97f0f944393417aa86980483d6c6d4d',
					description: "This section is intended to gather your feedback on the Locking Mechanism of the product.The Locking Mechanism refers the product's capacity to limit access, either to the product itself or to various users. These mechanisms can include both physical and digital forms, especially in the context of smart products. The following questions are used to assess this feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032295',
					name: 'Slip-Resistant Design',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92807eabd617a4aa5af84f49a77dcc97a',
					description: 'This section is intended to gather your feedback on the Slip-Resistant Design of the product.A Slip-resistant design refers to different features, including non-slip surfaces, textures, or materials that enhance grip and traction. The following questions are used to gauge this feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032299',
					name: 'Indicators',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9097f4771fd24405eb9ae6b5f7d2c6884',
					description: "This section is intended to gather your feedback on the Indicators feature of the product.Indicators refer to the product's capability to effectively signal its operational status - whether it's on or off, locked, or in any other state that might influence its safe usage. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032303',
					name: 'Safe to Move the Product',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd96da0ba7189774741babdfd648325d175',
					description: "This section is intended to gather your feedback on Safety to Move the Product. Safe to Move the product refers to the product's capability to be safely moved, especially for products that might undergo frequent movement. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.For this question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032307',
					name: 'Ease of Cleaning',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd93cbe832acb564e7d9768c7a2c15bd5e4',
					description: "This section is intended to gather your feedback on Ease of Cleaning of the product. Ease of Cleaning refers to the user's ability to effectively clean and upkeep the product. This includes cleaning both external and internal components, such as filters, where applicable. The following questions are used to assess the ease of cleaning of a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032311',
					name: 'Durability',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9ddee23ab7c4f4b36b3cd37fc6ee756be',
					description: 'This section is intended to gather your feedback on the Durability of the product. Durability refers to the expected lifespan of the product during typical usage, which includes enduring regular cleaning. The following questions are used to assess durability of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032315',
					name: 'Accessibility of Components',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9af5a40c712d54eb7b1011a1027a93a9c',
					description: "This section is intended to gather your feedback on the Accessibility of Components of the product. Accessibility of Components refers to a user's ability to conveniently reach all parts requiring cleaning or maintenance. This includes features like removable or easy-to-open covers and compartments. The following questions are used to assess the Accessibility of Components of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032319',
					name: 'Safety Considerations',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92b28ba96a75145a79a6d7eccb26c7239',
					description: "This section is intended to gather your feedback on the Safety Considerations of the product. Safety Considerations refers to whether a product's design prioritises user safety during cleaning and maintenance. For example, it addresses whether there are any sharp edges or hazardous materials that could cause injury if mishandled. The following questions are used to measure the Safety Considerations of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032323',
					name: 'Compatibility with Cleaning Products',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c6cf99fb7d3143efa2eabf6dd6b4dc72',
					description: "This section is intended to gather your feedback on the product's Compatibility with Cleaning Products. Compatibility with Cleaning Products refers to whether a product's design ensures user safety during cleaning and maintenance. This involves considering factors like the presence of sharp edges or hazardous materials that could lead to injury if mishandled. The following question is used to gauge the product's compatibility with cleaning products. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032327',
					name: 'Maintenance Requirements',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9998c960801d2423cbb58b2cda5d4853b',
					description: 'This section is intended to gather your feedback on the Maintenance Requirements of the product.Maintenance Requirements for the product can differ based on the product type and its usage. Certain products might require regular maintenance tasks such as lubricating moving parts or replacing worn components, while others could require less frequent maintenance or none at all. The following statements are used to assess the Maintenance Requirements of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032331',
					name: 'Availability of Replacement Parts',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c09208f3c92e497b92bddc595d1f7e84',
					description: "This section is intended to gather your feedback on the Availability of Replacement Parts for the product.Availability of Replacement Parts is significant as the accessibility and cost of replacement parts can influence the product's lifespan and the user's capability to maintain it over time. The following statement is used to gauge the availability of replacements parts for the product. Please read it carefully and provide your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032335',
					name: 'Parts Warranty',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9bc504f2a8dce4564bce29494b5200b40',
					description: 'This section is intended to gather your feedback on the Parts Warranty of the product. Parts Warranty refers to the length and extent of warranties covering both the product as a whole and its individual parts. This includes items like filters, motors and rechargeable batteries. The following statements are used to gauge the Parts Warranty of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032339',
					name: 'Readability of Packaging',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f0e637dbc416457490b14405e107c450',
					description: "This section is intended to gather your feedback on the Readability of Packaging of the product.Readability of Packaging refers to any text or symbols present on the product's packaging. This involves assessing factors such as the text's size and font, as well as the choice of language and symbols used. The following statement is used to gauge the Readability of Packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032343',
					name: 'Easy Opening and Closing',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d417ca7f31284d3dbfa7ea3fcbc0a502',
					description: "This section is intended to gather your feedback on Easy Opening and Closing of the product's packaging.Easy Opening and Closing of the product's packaging refers to the accessibility of the product within the packaging, assessing whether it can be accessed with ease and independence. The following statements are used to gauge the ease of opening and closing the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032347',
					name: 'Size and Weight of Packaging',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd932b3d91c9e8f4225abda325849e66858',
					description: "This section is intended to gather your feedback on the Size and Weight of packaging of the product.The Size and Weight of packaging refers to whether the product's packaging is reasonable and appropriate considering the product's size, weight and fragility. The following statement is used to assess the Size and Weight of packaging of the product. Please read it carefully and indicate your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032351',
					name: 'Materials of Packaging',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9cee51f6e36064f44a1a8b9af8cf00edd',
					description: 'This section is intended to gather your feedback on Materials of Packaging used for the product.Materials of Packaging refers to the specific type of packaging material used for the product (e.g., hard plastic, Styrofoam). The following statements are used to assess the materials used in the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032355',
					name: 'Stigma Associated with Packaging',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98a7433b5094e4278bad471ba4a4f4665',
					description: 'This section is intended to gather your feedback on the Stigma Associated with Packaging of the product.Stigma associated with packaging involves a negative perception of either the product itself or its users, based on the packaging. This impression might arise from the words, symbols or images displayed on the packaging. The following statements are used to assess the potential stigma associated with the packaging of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032359',
					name: 'Aesthetic Design of Packaging',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9fb659a1716b24f6792de84ca52a9f7cc',
					description: "This section is intended to gather your feedback on the Aesthetic Design of Packaging for the product.Aesthetic Design of Packaging refers to the visual appearance of the product's packaging, including factors such as colours, images and even the shape of the packaging. The following statement is used to assess the aesthetic design of the packaging for the product. Please read it carefully and indicate your feedback.For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:",
				},
				{
					id: '20296000000032363',
					name: 'Perceived Value for Money',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9de5eff1e66b24e138f4e5b689853a9f5',
					description: 'no description provided',
				},
				{
					id: '20296000000070017',
					name: 'Overall Product Rating',
					importance: 0,
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd993d1ef8993bb4f469763e4bf5fa6f12e',
					description: 'no description provided',
				},
			],
			domains: [
				{
					id: '20296000000032391',
					name: 'Ergonomics',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7niivbabf0f41157f409c91f0c964f6543387',
					roundIcon: 'https://previewengine.zohopublic.com.au/image/WD/7niivce5498ce48634058872762bc4eb12ff8',
					featureIds: [
						'20296000000020023',
						'20296000000020027',
						'20296000000020031',
						'20296000000032223',
						'20296000000032395',
						'20296000000032227',
						'20296000000076003',
					],
					importance: 0,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
				},
			],
			personas: [
				{
					id: '1',
					name: 'Able',
					icon: 'https://svgshare.com/i/119V.svg',
					roundButtonSelected: 'https://svgshare.com/i/1191.svg',
					roundButtonUnselected: 'https://svgshare.com/i/1192.svg',
					description: 'no description',
				},
				{
					id: '2',
					name: 'Hearing',
					icon: 'https://svgshare.com/i/1193.svg',
					roundButtonSelected: 'https://svgshare.com/i/119C.svg',
					roundButtonUnselected: 'https://svgshare.com/i/119N.svg',
					description: 'no description',
				},
				{
					id: '3',
					name: 'Cognitive',
					icon: 'https://svgshare.com/i/119M.svg',
					roundButtonSelected: 'https://svgshare.com/i/119A.svg',
					roundButtonUnselected: 'https://svgshare.com/i/119B.svg',
					description: 'no description',
				},
				{
					id: '4',
					name: 'Language',
					icon: 'https://svgshare.com/i/118d.svg',
					roundButtonSelected: 'https://svgshare.com/i/119P.svg',
					roundButtonUnselected: 'https://svgshare.com/i/11AP.svg',
					description: 'no description',
				},
				{
					id: '5',
					name: 'Vision',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9d00de6ef2c0a497282ec20d8a750f33a',
					roundButtonSelected: 'https://svgshare.com/i/119h.svg',
					roundButtonUnselected: 'https://svgshare.com/i/11AZ.svg',
					description: 'no description',
				},
				{
					id: '6',
					name: 'Mobility',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd981d5e5e39cce4efebf6d45cc69ac4b75',
					roundButtonSelected: 'https://svgshare.com/i/11A2.svg',
					roundButtonUnselected: 'https://svgshare.com/i/11A_.svg',
					description: 'no description',
				},
			],
			ageRange: {
				minAge: 18,
				maxAge: 65,
			},
		});
	}),

	http.get('/product/:productId/rating', ({ params }) => {
		const { productId } = params;
		if (productId === '20296000000089007') {
			return HttpResponse.json({
				overallRating: '3.17',
				domainRatings: [
					{
						id: '20296000000032391',
						rating: '3.16',
					},
					{
						id: '20296000000032387',
						rating: '3.25',
					},
					{
						id: '20296000000032383',
						rating: '2.96',
					},
					{
						id: '20296000000032379',
						rating: '3.68',
					},
					{
						id: '20296000000032375',
						rating: '3.00',
					},
					{
						id: '20296000000032371',
						rating: '3.16',
					},
					{
						id: '20296000000019011',
						rating: '0.00',
					},
					{
						id: '20296000000019015',
						rating: '0.00',
					},
				],
				featureRatings: [
					{
						id: '20296000000032363',
						rating: '0.00',
					},
					{
						id: '20296000000032335',
						rating: '3.00',
					},
					{
						id: '20296000000032327',
						rating: '4.00',
					},
					{
						id: '20296000000032331',
						rating: '3.00',
					},
					{
						id: '20296000000032319',
						rating: '3.00',
					},
					{
						id: '20296000000032323',
						rating: '4.00',
					},
					{
						id: '20296000000032311',
						rating: '3.00',
					},
					{
						id: '20296000000032315',
						rating: '2.00',
					},
					{
						id: '20296000000032307',
						rating: '3.30',
					},
					{
						id: '20296000000032303',
						rating: '2.00',
					},
					{
						id: '20296000000032295',
						rating: '4.00',
					},
					{
						id: '20296000000032299',
						rating: '2.00',
					},
					{
						id: '20296000000032291',
						rating: '0.00',
					},
					{
						id: '20296000000032287',
						rating: '3.00',
					},
					{
						id: '20296000000032279',
						rating: '4.00',
					},
					{
						id: '20296000000032283',
						rating: '3.00',
					},
					{
						id: '20296000000032275',
						rating: '4.00',
					},
					{
						id: '20296000000032271',
						rating: '3.70',
					},
					{
						id: '20296000000032263',
						rating: '4.00',
					},
					{
						id: '20296000000032267',
						rating: '3.00',
					},
					{
						id: '20296000000032259',
						rating: '0.00',
					},
					{
						id: '20296000000032251',
						rating: '2.00',
					},
					{
						id: '20296000000032255',
						rating: '3.00',
					},
					{
						id: '20296000000032247',
						rating: '4.00',
					},
					{
						id: '20296000000032243',
						rating: '2.70',
					},
					{
						id: '20296000000032239',
						rating: '3.10',
					},
					{
						id: '20296000000032235',
						rating: '3.50',
					},
					{
						id: '20296000000032231',
						rating: '3.00',
					},
					{
						id: '20296000000076003',
						rating: '2.00',
					},
					{
						id: '20296000000032227',
						rating: '2.30',
					},
					{
						id: '20296000000032395',
						rating: '4.00',
					},
					{
						id: '20296000000032223',
						rating: '3.60',
					},
					{
						id: '20296000000020031',
						rating: '3.50',
					},
					{
						id: '20296000000020027',
						rating: '3.70',
					},
					{
						id: '20296000000020023',
						rating: '3.00',
					},
				],
			});
		}

		return HttpResponse.json({
			overallRating: '4.33',
			domainRatings: [
				{
					id: '20296000000032391',
					rating: '4.33',
					expertOpinion: 'This is opinion updated',
				},
			],
			featureRatings: [
				{
					id: '20296000000076003',
					rating: '0.00',
				},
				{
					id: '20296000000032227',
					rating: '4.60',
				},
				{
					id: '20296000000032395',
					rating: '4.10',
				},
				{
					id: '20296000000032223',
					rating: '4.20',
				},
				{
					id: '20296000000020031',
					rating: '0.00',
				},
				{
					id: '20296000000020027',
					rating: '0.00',
				},
				{
					id: '20296000000020023',
					rating: '0.00',
				},
			],
		});
	}),

	http.get('/product/:productId/feature/:featureId', async () => {
		await delay(1000);
		return HttpResponse.json({
			features: [
				{
					importance: '0.4',
				},
				{
					importance: '0.3',
				},
				{
					importance: '0.3',
				},
				{
					importance: '0.0',
				},
				{
					importance: '0.0',
				},
			],
		});
	}),
];

export default handlers;

// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

const handlers = [
	http.post('http://localhost:8080/login', ({ request }) => HttpResponse.json(
		{
			user_id: '20296000000074005',
			productList: [
				{
					id: '20296000000077013',
					name: 'Washing Machine',
				},
			],
		},
	)),

	http.get('http://localhost:8080/product/:productId', ({ request }) => HttpResponse.json({
		brand: 'Asko',
		brandIcon: '',
		description: '',
		image: '',
		modelName: 'Washing Machine',
		productCategoryName: 'Laundry and Cleaning',
		expertOpinion: '',
	})),

	http.get('http://localhost:8080/product/:productId/filter', ({ request }) => HttpResponse.json({
		domains: [
			{
				id: '20296000000032391',
				name: 'Ergonomics',
				importance: 0,
				icon: 'https://previewengine.zohopublic.com.au/image/WD/87opqdbf4f1f6d72145f0a9fd41d7a9b779d9',
				roundIcon: '',
				featureIds: [
					'20296000000020023',
					'20296000000020027',
					'20296000000020031',
					'20296000000032223',
					'20296000000032395',
					'20296000000032227',
					'20296000000076003',
				],
				description: '',
			},
			{
				id: '20296000000032387',
				name: 'Usefulness',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000032231',
					'20296000000032235',
				],
				description: '',
			},
			{
				id: '20296000000032383',
				name: 'User-friendliness',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000032239',
					'20296000000032243',
					'20296000000032247',
					'20296000000032251',
					'20296000000032255',
					'20296000000032259',
				],
				description: '',
			},
			{
				id: '20296000000032379',
				name: 'Aesthetic Design',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000032263',
					'20296000000032267',
					'20296000000032271',
					'20296000000032275',
				],
				description: '',
			},
			{
				id: '20296000000032375',
				name: 'Safety',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000032279',
					'20296000000032283',
					'20296000000032287',
					'20296000000032291',
					'20296000000032295',
					'20296000000032299',
					'20296000000032303',
				],
				description: '',
			},
			{
				id: '20296000000019011',
				name: 'Value for Money',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000032363',
				],
				description: '',
			},
			{
				id: '20296000000019015',
				name: 'Overall Opinion',
				importance: 0,
				icon: '',
				roundIcon: '',
				featureIds: [
					'20296000000070017',
				],
				description: '',
			},
		],
		features: [
			{
				id: '20296000000020023',
				name: 'Readability',
				importance: 0,
				icon: 'https://previewengine.zohopublic.com.au/image/WD/87opq736526fb52a44d5ea61f77f1b767d76a',
				description: '<div style="box-sizing: border-box; margin: 0px; padding: 0px 0px 5vh; overflow-y: hidden; color: rgb(117, 117, 117); font-family: Poppins, Arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; white-space: normal; background-color: rgb(254, 254, 254); text-decoration-color: initial" id="QID60" class="QuestionOuter BorderColor DB  QID60"><div style="box-sizing: border-box; margin: 0px; padding: 0px" class="Inner BorderColor TB"><div style="box-sizing: border-box; margin: 0px; padding: 0px" class="InnerInner BorderColor"><div style="box-sizing: border-box; margin: 0px auto; padding: 0px 0px 24px; font-size: 18px; color: rgb(117, 117, 117); line-height: 1.5em; font-weight: 400; outline: rgb(0, 0, 0) solid 0px" tabindex="-1" class="QuestionText BorderColor"><div style="text-align: justify"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px">This section is intended to gather your feedback on the </span></span><b style="box-sizing: border-box"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px">Readability</span></span><span><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px"> </span></span></span></b><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px">of the product.<br /></span></span></div><div style="text-align: justify"><b style="box-sizing: border-box"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px">Readability</span></span></b><span><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px"> </span></span></span><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px">refers to the ease with which users can read and understand the information displayed on a product, encompassing text, buttons, and icons. The following statements are used to gauge the readability of the text on a product. Please read them carefully and provide your feedback.<br /></span></span></div><div style="text-align: justify"><span class="highlight" style="background-color: rgb(254, 254, 254)"><span class="colour" style="color: rgb(117, 117, 117)"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="font-size: 13.3333px; background-color: inherit">For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:</span></span></span></span><br /></div></div></div></div></div>',
			},
			{
				id: '20296000000020027',
				name: 'Buttons',
				importance: 0,
				icon: '',
				description: '<div style="text-align: justify"><span class="highlight" style="background-color: rgb(254, 254, 254)"><span class="colour" style="color: rgb(117, 117, 117)"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="background-color: inherit; font-size: 13.3333px">For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:</span></span></span></span><br /></div>',
			},
			{
				id: '20296000000020031',
				name: 'Language',
				importance: 0,
				icon: '',
				description: '<div style="text-align: justify"><span class="highlight" style="background-color: rgb(254, 254, 254)"><span class="colour" style="color: rgb(117, 117, 117)"><span class="font" style="font-family: DejaVuSans, sans-serif"><span class="size" style="background-color: inherit; font-size: 13.3333px">For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:</span></span></span></span><br /></div>',
			},
			{
				id: '20296000000032223',
				name: 'Grip and Twist-Friendliness',
				importance: 0,
				icon: '',
				description: '<div><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; box-sizing: inherit"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; box-sizing: inherit">This section is intended to gather your feedback on <b>Grip and Twist-Friendliness</b> of the product.<br /><br />Grip and Twist-Friendliness refers to the ease with which users can hold, interact with, and operate the product. It also encompasses the product&#39;s ability to prevent discomfort, slipping, and the need for excessive strength during use. The following statements are used to assess the grip and twist friendliness of the product. Please read them carefully and provide your feedback.<br />For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:</span></span><br /></div>',
			},
			{
				id: '20296000000032395',
				name: 'Sturdiness',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Sturdiness</b> the product.<br /></div><div><br /></div><div><b>Sturdiness</b> refers to both the stability and strength of the product, assessing how robust and dependable it feels during use. The following statements gauge the sturdiness as a feature of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032227',
				name: 'Size and Weight of Product',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Size and Weight</b> of the product.<br /><br />Size and Weight refers to the dimensions and the heaviness of the product and should be considered in relation to its intended purpose and usage, particularly in comparison to similar products with the same function. The following statements are used to assess the size and weight feature of the product. Please read them carefully and provide your feedback.<br />For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000076003',
				name: 'Overall Readability',
				importance: 0,
				icon: '',
				description: '',
			},
			{
				id: '20296000000032231',
				name: 'Perceived Usefulness',
				importance: 0,
				icon: '',
				description: '<div><div>This section is intended to gather your feedback on the Perceived Usefulness of the product. <br /></div><div><br /></div><div>Perceived usefulness refers to how efficient, effective, and/ or helpful the product is considered to be. The following statements are used to gauge the perceived usefulness of the product. Please read them carefully and provide your feedback.<br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div></div><div><br /></div>',
			},
			{
				id: '20296000000032235',
				name: 'Multimodal Feedback',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Multimodal</b> Feedback of the product.<br /></div><div><br /></div><div>Multimodal Feedback refers to products that utilise various channels, including auditory, visual, and tactile (such as vibration) cues, to alert users. The following statements are used to gauge multimodal feedback of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032239',
				name: 'Ease-of-Instructions',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Ease of Instruction</b> of the product.Ease of Instruction<br /></div><div>Ease of Instruction refers to the user&#39;s capability to understand the directions provided by and or with, the product. This can include markings on the product as well as physical and digital instruction manuals. Consideration should also be given not just to the presence of instructions but also their usability and helpfulness.<br /></div><div>The following statements are used to assess the Ease of Instruction of the product. Please read them carefully and provide your feedback.<br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032243',
				name: 'Simple and Intuitive Design',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Simple and Intuitive Design</b> of the product.<br /></div><div><br /></div><div>Simple and Intuitive Design refers to whether the product is easy to understand and navigate, without requiring detailed instructions or training. The following statements are used to gauge the simplicity and intuitiveness of the product&#39;s design. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032247',
				name: 'Minimal Learning Curve',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Minimal Learning Curve of the product.</b><br /></div><div><br /></div><div>Minimal Learning Curve refers to the ease with which the product can be understood and operated, without necessitating extensive training or prior experience. The following statements are used to assess the learning curve of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div><div><br /></div>',
			},
			{
				id: '20296000000032251',
				name: 'Independent Usage',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Independent Usage</b> of the product.<br /></div><div><br /></div><div>Independent Usage refers to the product&#39;s ease of understanding and use without requiring assistance from others. The following statement is used to gauge the independent usage of the product. Please read it carefully and provide your feedback.<br /></div><div><br /></div><div>For this statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032255',
				name: 'Recognition-Based Design',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gain your feedback on Recognition-Based Design of the product. <br /></div><div><br /></div><div>Recognition-Based Design emphasises recognition over recall. It means the design of the product minimises the amount of effort required for users to interact with it by relying on familiar visual cues and patterns instead of recalling specific information from memory. The following statement is used to measure recognition-based design of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032259',
				name: 'Ease of Set-Up',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Ease of Set Up</b> as a feature of a product. <br /></div><div><br /></div><div>Ease of Set Up refers to whether the design of the product is simple and easy to set up in terms of time, expertise and materials. Some products require common materials like batteries to complete the set up. Products might have an easy set up if they need a professional for installation. The following statements are used to measure recognition-based design of a product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032263',
				name: 'Customisation',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Customisation</b> of the product.<br /></div><div><br /></div><div>Customisation refers to the option for users to personalise products. The following statements are used to measure the customisation as a feature of the product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>Now that you have rated the customisation as a feature of the product, please indicate its importance for the product on a scale of 1 to 5:<br /></div>',
			},
			{
				id: '20296000000032267',
				name: 'Aesthetic Design',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Aesthetic Design</b> of the product. <br /></div><div><br /></div><div>Aesthetic Design refers to how the product looks.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032271',
				name: 'Contrast and Visibility',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Contrast and Visibility</b> of the product. <br /></div><div><br /></div><div>Contrast and visibility refers to how the product looks in terms of colours and materials, and how these distinguish the product from the environment, and or different product components from each other. Visibility can be achieved through colours and/ lights. The following statements are used to measure the contrast and visibility of the product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032275',
				name: 'Stigma',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Stigma</b> of the product. <br /></div><div><br /></div><div>Stigma refers to the negative perception of a product or the user of the product. Stigma can make a product undesirable or unappealing. The following statements are used to measure the stigma of a product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032279',
				name: 'Switching-off Automatically',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Switching-Off Automatically</b> of the product. <br /></div><div><br /></div><div>Switching-Off Automatically refers to safety feature that ensures the product will turn off automatically after a set period of time, reducing the risk of accidents and injuries. The following statement is used to measure the feature of a product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032283',
				name: 'Products with Cords',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>product with a cord</b>. <br /></div><div><br /></div><div><b>Cordless Product</b> refers to a product using alternative mechanisms to access power, including wireless charging and using batteries. A product may still advertise as cordless even if a cord is required to recharge the product in the case of wireless charging. The following statements are used to assess this feature of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032287',
				name: 'Sharp and/or Hazardous Materials',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Sharpness and or Hazardous Materials</b> of the product.<br /></div><div><br /></div><div><b>Sharp and or Hazardous Materials</b> refers to where they are not absolutely necessary not function of the product. While some products do require sharp edges (e.g. knives) or contain hazardous materials (e.g. cleaning products containing bleach), these are not considered in this category or their containers may be considered in place. The following questions are used to measure this feature of a product. Please read them carefully and indicate your feedback.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032291',
				name: 'Locking Mechanism',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Locking Mechanism</b> of the product.<br /></div><div><br /></div><div>The <b>Locking Mechanism</b> refers the product&#39;s capacity to limit access, either to the product itself or to various users. These mechanisms can include both physical and digital forms, especially in the context of smart products. The following questions are used to assess this feature of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032295',
				name: 'Slip-Resistant Design',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Slip-Resistant Design</b> of the product.<br /></div><div><br /></div><div>A <b>Slip-resistant design</b> refers to different features, including non-slip surfaces, textures, or materials that enhance grip and traction. The following questions are used to gauge this feature of the product. Please read them carefully and provide your feedback.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032299',
				name: 'Indicators',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on the <b>Indicators feature</b> of the product.<br /></div><div><br /></div><div><b>Indicators</b> refer to the product&#39;s capability to effectively signal its operational status - whether it&#39;s on or off, locked, or in any other state that might influence its safe usage. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.<br /></div><div><br /></div><div>For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032303',
				name: 'Safe to Move the Product',
				importance: 0,
				icon: '',
				description: '<div>This section is intended to gather your feedback on <b>Safety to Move</b> the Product. <br /></div><div><br /></div><div><b>Safe to Move</b> the product refers to the product&#39;s capability to be safely moved, especially for products that might undergo frequent movement. The following question is used to assess this feature of the product. Please read it carefully and provide your feedback.<br /></div><div><br /></div><div>For this question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:<br /></div>',
			},
			{
				id: '20296000000032363',
				name: 'Perceived Value for Money',
				importance: 0,
				icon: '',
				description: '<div>(no description provided)<br /></div>',
			},
			{
				id: '20296000000070017',
				name: 'Overall Product Rating',
				importance: 0,
				icon: '',
				description: '',
			},
		],
		personas: [
			{
				id: 0,
				name: 'string',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
				description: '',
			},
		],
		ageRange: {
			minAge: 0,
			maxAge: 0,
		},
	})),

	http.get('http://localhost:8080/product/:productId/rating', ({ request }) => HttpResponse.json({
		overallRating: '3.28',
		domainRatings: [
			{
				id: '20296000000032391',
				rating: '3.05',
			},
			{
				id: '20296000000032387',
				rating: '3.00',
			},
			{
				id: '20296000000032383',
				rating: '4.00',
			},
			{
				id: '20296000000032379',
				rating: '3.00',
			},
			{
				id: '20296000000032375',
				rating: '3.00',
			},
			{
				id: '20296000000032371',
				rating: '0.00',
			},
			{
				id: '20296000000032367',
				rating: '0.00',
			},
			{
				id: '20296000000019015',
				rating: '0.00',
			},
			{
				id: '20296000000019011',
				rating: '3.00',
			},
		],
		featureRatings: [
			{
				id: '20296000000032363',
				rating: '3.00',
			},
			{
				id: '20296000000032303',
				rating: '3.00',
			},
			{
				id: '20296000000032291',
				rating: '3.00',
			},
			{
				id: '20296000000032299',
				rating: '3.00',
			},
			{
				id: '20296000000032295',
				rating: '3.00',
			},
			{
				id: '20296000000032287',
				rating: '3.00',
			},
			{
				id: '20296000000032283',
				rating: '3.00',
			},
			{
				id: '20296000000032279',
				rating: '3.00',
			},
			{
				id: '20296000000032275',
				rating: '3.00',
			},
			{
				id: '20296000000032271',
				rating: '3.00',
			},
			{
				id: '20296000000032267',
				rating: '3.00',
			},
			{
				id: '20296000000032263',
				rating: '3.00',
			},
			{
				id: '20296000000032259',
				rating: '4.00',
			},
			{
				id: '20296000000032255',
				rating: '4.00',
			},
			{
				id: '20296000000032251',
				rating: '4.00',
			},
			{
				id: '20296000000032243',
				rating: '4.00',
			},
			{
				id: '20296000000032247',
				rating: '4.00',
			},
			{
				id: '20296000000032239',
				rating: '4.00',
			},
			{
				id: '20296000000032235',
				rating: '3.00',
			},
			{
				id: '20296000000076003',
				rating: '3.00',
			},
			{
				id: '20296000000032231',
				rating: '3.00',
			},
			{
				id: '20296000000032227',
				rating: '3.00',
			},
			{
				id: '20296000000032395',
				rating: '3.00',
			},
			{
				id: '20296000000032223',
				rating: '3.00',
			},
			{
				id: '20296000000020031',
				rating: '3.00',
			},
			{
				id: '20296000000020027',
				rating: '3.30',
			},
			{
				id: '20296000000020023',
				rating: '3.00',
			},
		],
	})),
];

export default handlers;

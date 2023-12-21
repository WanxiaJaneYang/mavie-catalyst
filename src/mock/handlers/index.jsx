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
				description: '',
				image: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9a9f8e3b6b5a94c4b9b6a2b3a6c5f9f6a0',
				modelName: 'S23',
				productCategoryName: 'Mobile Phones',
				expertOpinion: '',
			});
		}

		return HttpResponse.json({

			brandIcon: '',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			image: 'https://previewengine.zohopublic.com.au/image/WD/87opqd88416571b334c348a5f43b35b6ed32d',
			modelName: 'Manual Jar Opener',
			expertOpinion: '',
		});
	}),

	http.get('/product/:productId/filter', ({ params }) => {
		const { productId } = params;
		if (productId === '20296000000089007') {
			return HttpResponse.json({
				domains: [
					{
						id: '20296000000032391',
						name: 'Ergonomics',
						importance: '2.02',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9e57910d86ddb492e9d400096590acf7c',
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
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
					},
					{
						id: '20296000000032387',
						name: 'Usefulness',
						importance: '1.94',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd92d245b490d8e4915a194a5335aba7896',
						roundIcon: '',
						featureIds: [
							'20296000000032231',
							'20296000000032235',
						],
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
					},
				],
				features: [
					{
						id: '20296000000020023',
						name: 'Readability',
						importance: '1.95',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f5dd68e0f684476c9d059b7f136628e4',
						description: 'This section is intended to gather your feedback on the Readability of the product.Readability refers to the ease with which users can read and understand the information displayed on a product, encompassing text, buttons, and icons. The following statements are used to gauge the readability of the text on a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000020027',
						name: 'Buttons',
						importance: '3.00',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c8e315005b384bb09318d4bc78217d1a',
						description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000020031',
						name: 'Language',
						importance: '2.00',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9425a15d4899e4e4094cf8ab2a7ec6d17',
						description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032223',
						name: 'Grip and Twist-Friendliness',
						importance: '2.60',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd908110eee70f14e9e8df38cf0c70018dc',
						description: 'This section is intended to gather your feedback on Grip and Twist-Friendliness of the product.Grip and Twist-Friendliness refers to the ease with which users can hold, interact with, and operate the product. It also encompasses the product&#39;s ability to prevent discomfort, slipping, and the need for excessive strength during use. The following statements are used to assess the grip and twist friendliness of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032395',
						name: 'Sturdiness',
						importance: '2.25',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98c5d664287a44ec39355310fa20c5c6a',
						description: 'This section is intended to gather your feedback on the Sturdiness the product.Sturdiness refers to both the stability and strength of the product, assessing how robust and dependable it feels during use. The following statements gauge the sturdiness as a feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032227',
						name: 'Size and Weight of Product',
						importance: '2.50',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9408ab8e6a7374046a3a61e77495b2620',
						description: 'This section is intended to gather your feedback on the Size and Weight of the product.Size and Weight refers to the dimensions and the heaviness of the product and should be considered in relation to its intended purpose and usage, particularly in comparison to similar products with the same function. The following statements are used to assess the size and weight feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000076003',
						name: 'Overall Readability',
						importance: '1.00',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c939d9d3e3a54f198a5d06aa7e740d2b',
						description: '',
					},
					{
						id: '20296000000032231',
						name: 'Perceived Usefulness',
						importance: '2.00',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd990287b2f99e644258c8a18ed71a8b1ff',
						description: 'This section is intended to gather your feedback on the Perceived Usefulness of the product. Perceived usefulness refers to how efficient, effective, and/ or helpful the product is considered to be. The following statements are used to gauge the perceived usefulness of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
					{
						id: '20296000000032235',
						name: 'Multimodal Feedback',
						importance: '1.75',
						icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9daab01aaa752493fb4b329df664fb5c3',
						description: 'This section is intended to gather your feedback on the Multimodal Feedback of the product.Multimodal Feedback refers to products that utilise various channels, including auditory, visual, and tactile (such as vibration) cues, to alert users. The following statements are used to gauge multimodal feedback of the product. Please read them carefully and provide your feedback.For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
					},
				],
				personas: [
					{
						id: 0,
						name: 'string',
						icon: 'string',
						roundButtonSelected: 'string',
						roundButtonUnselected: 'string',
						description: 'string',
					},
				],
				ageRange: {
					minAge: 0,
					maxAge: 0,
				},
			});
		}

		return HttpResponse.json({
			domains: [
				{
					id: '20296000000032391',
					name: 'Ergonomics',
					importance: '4.64',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9e57910d86ddb492e9d400096590acf7c',
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
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
				},
			],
			features: [
				{
					id: '20296000000020023',
					name: 'Readability',
					importance: '0.00',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9f5dd68e0f684476c9d059b7f136628e4',
					description: 'This section is intended to gather your feedback on the Readability of the product.Readability refers to the ease with which users can read and understand the information displayed on a product, encompassing text, buttons, and icons. The following statements are used to gauge the readability of the text on a product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000020027',
					name: 'Buttons',
					importance: '0.00',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c8e315005b384bb09318d4bc78217d1a',
					description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000020031',
					name: 'Language',
					importance: '0.00',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9425a15d4899e4e4094cf8ab2a7ec6d17',
					description: 'For each statement, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032223',
					name: 'Grip and Twist-Friendliness',
					importance: '4.20',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd908110eee70f14e9e8df38cf0c70018dc',
					description: 'This section is intended to gather your feedback on Grip and Twist-Friendliness of the product.Grip and Twist-Friendliness refers to the ease with which users can hold, interact with, and operate the product. It also encompasses the product&#39;s ability to prevent discomfort, slipping, and the need for excessive strength during use. The following statements are used to assess the grip and twist friendliness of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032395',
					name: 'Sturdiness',
					importance: '4.10',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd98c5d664287a44ec39355310fa20c5c6a',
					description: 'This section is intended to gather your feedback on the Sturdiness the product.Sturdiness refers to both the stability and strength of the product, assessing how robust and dependable it feels during use. The following statements gauge the sturdiness as a feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000032227',
					name: 'Size and Weight of Product',
					importance: '4.60',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9408ab8e6a7374046a3a61e77495b2620',
					description: 'This section is intended to gather your feedback on the Size and Weight of the product.Size and Weight refers to the dimensions and the heaviness of the product and should be considered in relation to its intended purpose and usage, particularly in comparison to similar products with the same function. The following statements are used to assess the size and weight feature of the product. Please read them carefully and provide your feedback.For each question, please indicate your agreement on a scale of 1 to 5 where 1 means strongly disagree and 5 means strongly agree:',
				},
				{
					id: '20296000000076003',
					name: 'Overall Readability',
					importance: '0.00',
					icon: 'https://previewengine.zohopublic.com.au/image/WD/7fnd9c939d9d3e3a54f198a5d06aa7e740d2b',
					description: '',
				},
			],
			personas: [
				{
					id: 0,
					name: 'string',
					icon: 'string',
					roundButtonSelected: 'string',
					roundButtonUnselected: 'string',
					description: 'string',
				},
			],
			ageRange: {
				minAge: 0,
				maxAge: 0,
			},
		});
	}),

	http.get('/product/:productId/rating', ({ params }) => {
		const { productId } = params;
		if (productId === '20296000000089007') {
			return HttpResponse.json({
				overallRating: '2.10',
				domainRatings: [
					{
						id: '20296000000032379',
						rating: '0.00',
					},
					{
						id: '20296000000032379',
						rating: '0.00',
					},
					{
						id: '20296000000032391',
						rating: '1.88',
					},
					{
						id: '20296000000032391',
						rating: '2.17',
					},
					{
						id: '20296000000032371',
						rating: '0.00',
					},
					{
						id: '20296000000032371',
						rating: '0.00',
					},
					{
						id: '20296000000019015',
						rating: '0.00',
					},
					{
						id: '20296000000019015',
						rating: '0.00',
					},
					{
						id: '20296000000032367',
						rating: '0.00',
					},
					{
						id: '20296000000032367',
						rating: '0.00',
					},
					{
						id: '20296000000032375',
						rating: '0.00',
					},
					{
						id: '20296000000032375',
						rating: '0.00',
					},
					{
						id: '20296000000032387',
						rating: '2.00',
					},
					{
						id: '20296000000032387',
						rating: '1.89',
					},
					{
						id: '20296000000032383',
						rating: '0.00',
					},
					{
						id: '20296000000032383',
						rating: '0.00',
					},
					{
						id: '20296000000019011',
						rating: '0.00',
					},
					{
						id: '20296000000019011',
						rating: '0.00',
					},
				],
				featureRatings: [
					{
						id: '20296000000032235',
						rating: '1.50',
					},
					{
						id: '20296000000032231',
						rating: '2.00',
					},
					{
						id: '20296000000076003',
						rating: '1.00',
					},
					{
						id: '20296000000032227',
						rating: '2.50',
					},
					{
						id: '20296000000032395',
						rating: '2.50',
					},
					{
						id: '20296000000032223',
						rating: '2.60',
					},
					{
						id: '20296000000020031',
						rating: '2.00',
					},
					{
						id: '20296000000020027',
						rating: '3.00',
					},
					{
						id: '20296000000020023',
						rating: '2.40',
					},
					{
						id: '20296000000020023',
						rating: '1.50',
					},
					{
						id: '20296000000032235',
						rating: '2.00',
					},
					{
						id: '20296000000032231',
						rating: '2.00',
					},
					{
						id: '20296000000076003',
						rating: '1.00',
					},
					{
						id: '20296000000032227',
						rating: '2.50',
					},
					{
						id: '20296000000032395',
						rating: '2.00',
					},
				],
			});
		}

		return HttpResponse.json({
			overallRating: '4.33',
			domainRatings: [
				{
					id: '20296000000032379',
					rating: '0.00',
				},
				{
					id: '20296000000032379',
					rating: '0.00',
				},
				{
					id: '20296000000032379',
					rating: '0.00',
				},
				{
					id: '20296000000032391',
					rating: '5.00',
				},
				{
					id: '20296000000032391',
					rating: '4.59',
				},
				{
					id: '20296000000032391',
					rating: '4.33',
				},
				{
					id: '20296000000032371',
					rating: '0.00',
				},
				{
					id: '20296000000032371',
					rating: '0.00',
				},
				{
					id: '20296000000032371',
					rating: '0.00',
				},
				{
					id: '20296000000019015',
					rating: '0.00',
				},
				{
					id: '20296000000019015',
					rating: '0.00',
				},
				{
					id: '20296000000019015',
					rating: '0.00',
				},
				{
					id: '20296000000032367',
					rating: '0.00',
				},
				{
					id: '20296000000032367',
					rating: '0.00',
				},
				{
					id: '20296000000032367',
					rating: '0.00',
				},
				{
					id: '20296000000032375',
					rating: '0.00',
				},
				{
					id: '20296000000032375',
					rating: '0.00',
				},
				{
					id: '20296000000032375',
					rating: '0.00',
				},
				{
					id: '20296000000032387',
					rating: '0.00',
				},
				{
					id: '20296000000032387',
					rating: '0.00',
				},
				{
					id: '20296000000032387',
					rating: '0.00',
				},
				{
					id: '20296000000032383',
					rating: '0.00',
				},
				{
					id: '20296000000032383',
					rating: '0.00',
				},
				{
					id: '20296000000032383',
					rating: '0.00',
				},
				{
					id: '20296000000019011',
					rating: '0.00',
				},
				{
					id: '20296000000019011',
					rating: '0.00',
				},
				{
					id: '20296000000019011',
					rating: '0.00',
				},
			],
			featureRatings: [
				{
					id: '20296000000076003',
					rating: '0.00',
				},
				{
					id: '20296000000032227',
					rating: '4.00',
				},
				{
					id: '20296000000032395',
					rating: '3.50',
				},
				{
					id: '20296000000032223',
					rating: '3.80',
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
				{
					id: '20296000000032227',
					rating: '4.80',
				},
				{
					id: '20296000000076003',
					rating: '0.00',
				},
				{
					id: '20296000000032395',
					rating: '3.80',
				},
				{
					id: '20296000000032223',
					rating: '3.80',
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
				{
					id: '20296000000076003',
					rating: '0.00',
				},
				{
					id: '20296000000032227',
					rating: '5.00',
				},
				{
					id: '20296000000032395',
					rating: '5.00',
				},
				{
					id: '20296000000032223',
					rating: '5.00',
				},
				{
					id: '20296000000020031',
					rating: '0.00',
				},
				{
					id: '20296000000020023',
					rating: '0.00',
				},
				{
					id: '20296000000020027',
					rating: '0.00',
				},
			],
		});
	}),

	http.get('/product/:productId/feature/:featureId', ({ request }) => HttpResponse.json({
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
	})),
];

export default handlers;

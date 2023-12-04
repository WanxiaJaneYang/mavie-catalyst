/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';

const domainSlice = createSlice({
	name: 'domain',
	initialState: {
		loading: false,
		errors: null,
		// entities: null,
		entities: {
			1: {
				name: 'Ergonomics',
				icon: '<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.40773 11.5086C8.98025 11.4744 9.16159 11.3936 9.49849 11.2436L9.51023 11.2384C9.54732 11.2224 9.58574 11.2054 9.62673 11.1872L9.62675 11.1872C9.76879 11.1242 9.94168 11.0475 10.1971 10.9559C10.2103 10.9448 10.2103 10.9448 10.2346 10.947C10.4825 11.0547 10.7855 11.0937 11.0706 11.0577L12.8849 10.7769C13.2827 10.714 13.6448 10.5009 13.8695 10.1775C14.1074 9.84313 14.2037 9.44716 14.1408 9.04938C14.1125 8.85628 14.0369 8.66573 13.9276 8.49384C13.8724 8.47699 13.794 8.46084 13.687 8.45036C13.5074 8.43278 13.2824 8.43424 13.0224 8.4527C12.503 8.48955 11.8813 8.59126 11.2766 8.71298C10.6738 8.83429 10.0971 8.97357 9.67049 9.08274C9.54761 9.11418 9.43735 9.14308 9.34268 9.16828C9.28443 9.37533 9.27109 9.59275 9.30554 9.81071C9.34592 10.0472 9.43709 10.2636 9.57906 10.46L9.45612 10.5131C9.35283 10.5578 9.27137 10.593 9.197 10.6223C9.0049 10.7157 8.9033 10.7557 8.70441 10.7871L8.67925 9.54696C8.68033 9.5348 8.67809 9.52541 8.67586 9.51602C8.67362 9.50663 8.67139 9.49724 8.67247 9.48508L7.45742 3.54333C7.54442 3.47046 7.62573 3.46193 7.68656 3.45554L7.69817 3.45431L7.89342 3.74122C7.9846 3.95765 8.3804 4.88741 8.72407 5.29777L8.72408 5.29778C8.77951 5.36396 8.83494 5.43015 8.89252 5.47201C9.02688 5.56717 9.16638 5.63681 9.31001 5.67662C9.43386 5.67051 9.54222 5.65912 9.64206 5.63832C9.70943 5.61728 9.77875 5.59586 9.84978 5.57416C10.0104 5.50383 10.1561 5.38076 10.3127 5.14582C10.3538 5.08421 10.3934 4.97133 10.4098 4.78704C10.4258 4.60708 10.4174 4.38628 10.3867 4.13322C10.3253 3.62717 10.1804 3.03355 10.0102 2.45889C9.8406 1.88662 9.64935 1.34459 9.50011 0.944828C9.42559 0.745216 9.36177 0.581704 9.31671 0.468388L9.30873 0.44835C9.14032 0.295708 8.97479 0.183419 8.81522 0.108887C7.87699 -0.307015 6.36352 0.564267 5.41325 1.11133L5.32702 1.16094C5.11952 1.28968 4.95174 1.38515 4.85014 1.42519C4.60724 1.53854 4.30956 1.85541 3.7915 4.24873C3.57275 5.19768 3.41589 6.13985 3.35931 6.50256L0.15852 8.46253C0.0680095 8.51581 0.0107577 8.6088 0.00215384 8.7061C-0.00645004 8.80339 0.00927058 8.90284 0.0757887 8.98226L3.95601 13.6153C4.07796 13.7609 4.29687 13.7803 4.44248 13.6583L4.79989 13.359L6.81163 11.539L8.40773 11.5086ZM9.64945 8.37605C9.4442 8.27625 9.26647 8.15054 9.12418 7.98065C8.96898 7.79533 8.86672 7.56566 8.83743 7.34244C8.79995 7.08196 8.83658 6.82803 8.9463 6.59209C9.081 6.54589 9.25617 6.4869 9.46153 6.42018C9.5726 6.38409 9.69238 6.34578 9.81927 6.30604L9.84567 6.29988C9.92825 6.27996 10.0073 6.25505 10.0832 6.22453C10.4645 6.10846 10.8933 5.98527 11.3341 5.87249C12.0393 5.69204 12.763 5.54139 13.3668 5.48638C13.669 5.45883 13.9292 5.45645 14.1361 5.48178C14.1806 5.48723 14.2209 5.49377 14.2574 5.5011C14.2452 5.50558 14.2329 5.50994 14.2206 5.51418C14.3246 5.58466 14.4266 5.67948 14.5042 5.77214C14.6594 5.95746 14.7616 6.18713 14.7909 6.41034C14.8517 6.83245 14.7178 7.23735 14.3936 7.57639C14.3071 7.66693 14.2074 7.75041 14.0987 7.82482C13.9871 7.79341 13.8695 7.77475 13.7542 7.76347C13.5215 7.74069 13.2543 7.74432 12.9735 7.76425C12.4113 7.80415 11.7566 7.91234 11.1404 8.03637C10.5908 8.14698 10.0643 8.27173 9.64945 8.37605ZM15.3616 3.83782C15.4217 4.26885 15.2662 4.7197 14.9416 5.05596C14.7411 4.89985 14.479 4.82843 14.22 4.79672C13.9462 4.7632 13.6325 4.76912 13.3041 4.79905C12.6466 4.85897 11.8818 5.01992 11.163 5.20385C11.116 5.21587 11.0692 5.228 11.0226 5.24021C11.0627 5.11414 11.0855 4.98073 11.0973 4.84814C11.119 4.60348 11.1059 4.33091 11.0718 4.05017C11.0433 3.81466 10.9991 3.56611 10.9445 3.31336L10.9925 3.30342C11.3926 3.22083 11.9357 3.11687 12.5093 3.03074C13.0847 2.94435 13.6825 2.8772 14.1947 2.86582C14.3855 2.86158 14.5604 2.86519 14.7152 2.87756C15.069 3.11728 15.2909 3.44507 15.3616 3.83782ZM10.7799 2.64265L10.853 2.62749C11.2609 2.54328 11.817 2.43677 12.4069 2.34821C12.874 2.27807 13.3677 2.21837 13.8287 2.1906C13.8714 1.99296 13.8776 1.7816 13.8461 1.5711C13.7225 0.751209 13.0136 0.173732 12.2799 0.292706L10.7507 0.537439C10.54 0.565083 10.3453 0.65965 10.1793 0.791366C10.3268 1.19065 10.5086 1.71183 10.6719 2.26282C10.7089 2.38776 10.7451 2.51475 10.7799 2.64265Z" fill="#891AEE"/></svg>',
				roundIcon: '<svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="35.1696" cy="33.7373" rx="35.1696" ry="33.7373" fill="#F6F8FA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3101 43.4575C37.3528 43.3879 37.683 43.2233 38.2966 42.9175L38.318 42.9068C38.3855 42.8744 38.4555 42.8396 38.5301 42.8026L38.5302 42.8025C38.7889 42.6741 39.1038 42.5178 39.5689 42.3312C39.5794 42.3213 39.5854 42.3157 39.5924 42.313C39.6015 42.3094 39.6124 42.3105 39.6373 42.313C40.0887 42.5325 40.6405 42.6121 41.1597 42.5386L44.4641 41.9663C45.1885 41.8381 45.8479 41.4037 46.2571 40.7448C46.6904 40.0632 46.8658 39.2562 46.7513 38.4455C46.6817 37.9141 46.4551 37.392 46.132 36.9604C46.1128 36.9348 46.0926 36.909 46.0714 36.8833C46.0323 36.8775 45.9913 36.8723 45.9486 36.8676C45.6029 36.8297 45.1783 36.8335 44.6974 36.8717C43.7364 36.9481 42.5925 37.1579 41.4869 37.4069C40.3836 37.6554 39.3289 37.9405 38.5493 38.1638C38.4036 38.2055 38.2676 38.245 38.1428 38.2817C37.9319 38.8204 37.8619 39.4078 37.9452 39.9972C38.0187 40.4791 38.1848 40.9202 38.4433 41.3205C38.363 41.3591 38.2893 41.3948 38.2208 41.428L38.2195 41.4286L38.2195 41.4286L38.2191 41.4288C38.0311 41.5198 37.8829 41.5916 37.7475 41.6513C37.3977 41.8415 37.2126 41.9231 36.8504 41.9872L36.8046 39.4596C36.8065 39.4349 36.8025 39.4157 36.7984 39.3966C36.7943 39.3774 36.7903 39.3583 36.7922 39.3335L34.5794 27.2238C34.7378 27.0753 34.8859 27.058 34.9967 27.0449L35.0178 27.0424L35.3734 27.6272C35.5395 28.0683 36.2603 29.9632 36.8862 30.7995C36.9872 30.9344 37.0881 31.0693 37.193 31.1546C37.6972 31.5542 38.2411 31.733 38.8085 31.6143C39.0798 31.5719 39.3166 31.4836 39.538 31.3315C39.6962 31.1714 39.8514 30.9663 40.0088 30.702C40.1272 30.5034 40.2087 30.201 40.2411 29.7922C40.2732 29.3885 40.2555 28.9088 40.1979 28.3773C40.1388 27.8317 40.0389 27.2411 39.9134 26.636L39.858 26.6503L39.7958 26.6665L39.7801 26.6706L39.7763 26.6716L39.7754 26.6719L39.7752 26.6719L39.686 26.3385C39.5968 26.005 39.5969 26.005 39.597 26.0049L39.5973 26.0049L39.5985 26.0046L39.6028 26.0034L39.6196 25.999L39.6842 25.9821L39.7647 25.9614C39.6823 25.6071 39.5932 25.2516 39.5003 24.9009C39.1885 23.7233 38.8374 22.6097 38.5638 21.7898C38.5327 21.6964 38.5025 21.6068 38.4736 21.5214C37.9876 20.8874 37.5066 20.4617 37.0522 20.2242C35.3435 19.3766 32.5871 21.1523 30.8565 22.2673L30.6994 22.3684C30.3215 22.6308 30.016 22.8253 29.8309 22.907C29.3886 23.138 28.8464 23.7838 27.9029 28.6615C27.5045 30.5955 27.2189 32.5157 27.1158 33.255L21.2865 37.2495C21.1216 37.3581 21.0174 37.5476 21.0017 37.7459C20.986 37.9442 21.0147 38.1469 21.1358 38.3087L28.2025 47.7512C28.4246 48.048 28.8233 48.0874 29.0885 47.8389L29.7394 47.2288L33.4032 43.5196L36.3101 43.4575ZM38.67 37.4119C38.7316 37.3408 38.7947 37.2731 38.8571 37.2147C38.3614 36.9908 37.938 36.6991 37.6149 36.2674C37.3322 35.8897 37.146 35.4216 37.0927 34.9667C37.0017 34.2591 37.1505 33.5753 37.5346 32.9704C37.7189 32.901 37.9282 32.8233 38.1582 32.7397C38.3615 32.6658 38.5808 32.5873 38.8132 32.5058C38.8337 32.5007 38.8541 32.4955 38.8743 32.49C39.0187 32.451 39.1563 32.4021 39.2881 32.3416C39.9871 32.1034 40.7744 31.8502 41.584 31.6184C42.8734 31.2492 44.2061 30.938 45.3248 30.824C45.8844 30.7669 46.3771 30.7606 46.7774 30.8155C47.0404 30.8515 47.2474 30.9118 47.4042 30.9898C47.2453 31.0872 47.0766 31.1715 46.8965 31.2406C47.0861 31.3842 47.2717 31.5775 47.413 31.7663C47.6957 32.144 47.882 32.6121 47.9353 33.067C48.0459 33.9273 47.8021 34.7525 47.2118 35.4435C46.9531 35.7462 46.63 36.0102 46.2757 36.2175C46.193 36.2027 46.1085 36.1909 46.023 36.1815C45.6179 36.1371 45.1461 36.1437 44.642 36.1837C43.6331 36.2638 42.4526 36.4818 41.3345 36.7336C40.3558 36.954 39.4167 37.2023 38.67 37.4119ZM48.9746 27.8241C49.0972 28.8073 48.7278 29.8412 47.9851 30.5416C47.6857 30.3116 47.2928 30.1896 46.8703 30.1317C46.3953 30.0666 45.8428 30.0773 45.2539 30.1374C44.0755 30.2575 42.6974 30.5814 41.3933 30.9549C41.0906 31.0415 40.7913 31.1311 40.4985 31.2216C40.5331 31.1681 40.5675 31.1127 40.6017 31.0553C40.7976 30.7264 40.8929 30.3035 40.9292 29.8469C40.9658 29.3853 40.9443 28.8594 40.884 28.303C40.8213 27.724 40.7155 27.1019 40.5839 26.4702C40.7024 26.4419 40.8319 26.4114 40.971 26.3793C41.7026 26.2103 42.6962 25.9974 43.7468 25.8209C44.7993 25.644 45.8995 25.5054 46.847 25.4818C46.9301 25.4797 47.0118 25.4786 47.092 25.4783C47.3102 25.5618 47.5167 25.6696 47.7059 25.8C48.4036 26.2937 48.8399 26.9864 48.9746 27.8241ZM39.2941 31.5423C39.2083 31.6046 39.121 31.6564 39.0312 31.6998C38.9448 31.7293 38.8598 31.7586 38.7762 31.7875C38.9413 31.6937 39.1146 31.6118 39.2941 31.5423ZM40.4349 25.7961C40.5517 25.7681 40.6788 25.7382 40.8149 25.7068C41.5551 25.5358 42.5631 25.3198 43.6317 25.1402C44.4427 25.004 45.294 24.8878 46.0926 24.8291C46.2472 24.3287 46.2896 23.765 46.2145 23.2043C45.9894 21.5333 44.6984 20.3564 43.3622 20.5989L40.5771 21.0977C40.1706 21.1573 39.7966 21.3701 39.4832 21.6639C39.4225 21.7208 39.3637 21.7804 39.3084 21.8429C39.5695 22.6383 39.8842 23.6541 40.1675 24.7242C40.2608 25.0768 40.351 25.4361 40.4349 25.7961Z" fill="#455468"/></svg>',
				importance: 0.3,
				features: [1, 2, 3, 4, 5, 6, 7],
			},
			2: {
				name: 'Aesthetics',
				icon: '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5556 6.24976L11.9536 4.83476C11.6471 4.66793 11.3965 4.41845 11.2287 4.1133L9.79211 1.50121C9.3978 0.783764 8.67346 0.355591 7.855 0.355591C7.03654 0.355591 6.3122 0.783764 5.91789 1.50121L4.48127 4.1133C4.31349 4.41845 4.06286 4.66793 3.75656 4.83457L1.15442 6.24995C0.431617 6.64311 0 7.36917 0 8.19203C0 9.0149 0.431617 9.74096 1.15442 10.1343L3.75637 11.5493C4.06286 11.7161 4.31349 11.9656 4.48127 12.2708L5.91789 14.8829C6.3122 15.6003 7.03654 16.0285 7.855 16.0285C8.67346 16.0285 9.3978 15.6003 9.79211 14.8829L11.2287 12.2708C11.3965 11.9656 11.6471 11.7161 11.9534 11.5495L14.5556 10.1341C15.2784 9.74096 15.71 9.0149 15.71 8.19203C15.71 7.36917 15.2784 6.64311 14.5556 6.24976Z" fill="#891AEE"/></svg>',
				roundIcon: '',
				importance: 0.2,
				features: [8, 9],
			},
			3: {
				name: 'Usefulness',
				icon: '<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.653564C6.01664 0.653564 4.56659 1.09343 3.33323 1.91754C2.09986 2.74165 1.13856 3.91299 0.570907 5.28344C0.00324966 6.65388 -0.145275 8.16188 0.144114 9.61674C0.433503 11.0716 1.14781 12.408 2.1967 13.4569C3.2456 14.5058 4.58197 15.2201 6.03682 15.5094C7.49168 15.7988 8.99968 15.6503 10.3701 15.0827C11.7406 14.515 12.9119 13.5537 13.736 12.3203C14.5601 11.087 15 9.63692 15 8.15356C14.9978 6.1651 14.207 4.2587 12.8009 2.85265C11.3949 1.4466 9.48846 0.655726 7.5 0.653564ZM9.51167 10.0441C9.51167 9.2869 8.7935 8.65656 7.85167 8.52906V11.5589C8.7935 11.4307 9.51167 10.8006 9.51167 10.0441ZM5.48834 6.26306C5.48834 7.02023 6.206 7.65056 7.14833 7.77806V4.74823C6.206 4.8764 5.48834 5.50656 5.48834 6.26306ZM9.51167 6.26306C9.51167 6.35624 9.54868 6.4456 9.61457 6.51149C9.68046 6.57738 9.76982 6.6144 9.863 6.6144C9.95618 6.6144 10.0455 6.57738 10.1114 6.51149C10.1773 6.4456 10.2143 6.35624 10.2143 6.26306C10.209 5.94947 10.132 5.64125 9.98912 5.36204C9.84626 5.08282 9.64138 4.84002 9.39017 4.65223C8.94598 4.30603 8.41228 4.09367 7.85167 4.04006V3.53123C7.85167 3.43796 7.81462 3.34851 7.74867 3.28256C7.68272 3.21661 7.59327 3.17956 7.5 3.17956C7.40673 3.17956 7.31729 3.21661 7.25134 3.28256C7.18538 3.34851 7.14833 3.43796 7.14833 3.53123V4.04006C6.58749 4.09354 6.05354 4.30591 5.60917 4.65223C5.35799 4.84004 5.15312 5.08285 5.01027 5.36206C4.86741 5.64127 4.79036 5.94948 4.785 6.26306C4.79037 6.57677 4.86742 6.88508 5.01027 7.16443C5.15312 7.44377 5.35798 7.68673 5.60917 7.87473C6.0534 8.2213 6.58742 8.4337 7.14833 8.4869V11.5589C6.206 11.4307 5.48834 10.8006 5.48834 10.0441C5.48834 9.95079 5.45128 9.86135 5.38533 9.7954C5.31938 9.72945 5.22994 9.6924 5.13667 9.6924C5.0434 9.6924 4.95395 9.72945 4.888 9.7954C4.82205 9.86135 4.785 9.95079 4.785 10.0441C4.79036 10.3576 4.86741 10.6659 5.01027 10.9451C5.15312 11.2243 5.35799 11.4671 5.60917 11.6549C6.05344 12.0013 6.58748 12.2135 7.14833 12.2664V12.7759C7.14833 12.8692 7.18538 12.9586 7.25134 13.0246C7.31729 13.0905 7.40673 13.1276 7.5 13.1276C7.59327 13.1276 7.68272 13.0905 7.74867 13.0246C7.81462 12.9586 7.85167 12.8692 7.85167 12.7759V12.2664C8.41229 12.2133 8.94608 12.0012 9.39017 11.6549C9.64528 11.4707 9.85302 11.2287 9.99629 10.9485C10.1396 10.6684 10.2143 10.3583 10.2143 10.0436C10.2143 9.72901 10.1396 9.41888 9.99629 9.13876C9.85302 8.85864 9.64528 8.61655 9.39017 8.4324C8.94603 8.08624 8.41226 7.87414 7.85167 7.82106V4.74823C8.7935 4.8764 9.51167 5.50656 9.51167 6.26306Z" fill="#891AEE"/></svg>',
				roundIcon: '',
				importance: 0.2,
				features: [10, 11, 12, 13, 14],
			},
		},
		// ids: null,
		ids: [1, 2, 3],
	},
	reducers: {
		fetchDomainRequest: (state) => {
			state.loading = true;
		},
		fetchDomainSuccess: (state, action) => {
			const domains = action.payload;
			state.loading = false;
			domains.forEach((domain) => {
				state.entities[domain.id] = domain;
				if (!state.ids.includes(domain.id)) {
					state.ids.push(domain.id);
				}
			});
		},
		fetchDomainFailure: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductFilter.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})

			.addCase(getProductFilter.fulfilled, (state, action) => {
				state.loading = false;
				state.errors = null;
				state.entities = action.payload.domains.reduce(
					(entities, domain) => {
						entities[domain.id] = domain;
						return entities;
					},
					{},
				);
				state.ids = action.payload.domains.map((domain) => domain.id);
			});
	},

});

export const { fetchDomainRequest, fetchDomainSuccess, fetchDomainFailure } = domainSlice.actions;

export default domainSlice.reducer;

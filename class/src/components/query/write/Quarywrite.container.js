import QueryUI from "./Query.presenter";
import { CREATE_PROFILE } from "./Querywrite.queries";

const Query = () => {
	const [createProfile] = useMutation(CREATE_PROFILE);
	const [profile, setProfile] = useState({
		name: "",
		age: "",
		school: "",
	});
	const onChangeInput = (event) => {
		setProfile({
			...profile,
			[event.target.name]: event.target.value,
		});
	};

	const onClickSubmit = async () => {
		try {
			const result = await createProfile({
				variables: {
					...profile,
					age: Number(profile.age),
				},
			});
			alert(result.data.createProfile.message);
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<QueryUI onChangeInput={onChangeInput} onClickSubmit={onClickSubmit} />
	);
};
export default Query;

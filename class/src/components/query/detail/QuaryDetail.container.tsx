import { useRouter } from "next/router";

export default function RouterPage() {
	const router = useRouter();
	const value = "bbb";

	const onClickRoutin = () => {
		router.push(`/query/철수/${value}`);
	};

	return (
		<>
			<button onClick={onClickRoutin}>게시글 등로 페이지로 이동</button>
		</>
	);
}

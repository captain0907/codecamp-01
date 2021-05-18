import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

export default function QueryDetailPage() {
	const router = useRouter();

	const profile = gql`
		query fetchProfile($name: String) {
			fetchProfile(name: $name) {
				number
				name
				age
				school
			}
		}
	`;

	const { data } = useQuery(profile, {
		variables: {
			name: router.query.name,
		},
	});

	return (
		<>
			<div>이름 {data ? <></> : data.fetchProfile.name}</div>
		</>
	);
}

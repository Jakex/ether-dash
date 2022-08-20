import {APIUser} from 'discord-api-types/v10';
import {verify} from 'jsonwebtoken';
import {GetServerSideProps, PageConfig} from 'next';
import Link from 'next/link';
import dotenv from "dotenv"

interface Props {
	user: APIUser | undefined;
}

export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function ServerlessDiscordOAuthDemoPage({user}: Props) {
	if (!user) {
		return (
			<div>
				<h1>You are not signed in!</h1>

				<Link href="/api/oauth">
					<a className="text-blue-500 dark:text-blue-300">Log in with Discord</a>
				</Link>
			</div>
		);
	}

	return (
		<div>
			<h1>
				Hello, {user.username}#{user.discriminator}!
			</h1>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
	const {token = null} = ctx.req.cookies;

	if (!token) {
		return {
			props: {user: undefined},
		};
	}

	return {
		props: {
			// @ts-ignore
			user: verify(token, process.env.JWT_SECRET) as APIUser,
		},
	};
};
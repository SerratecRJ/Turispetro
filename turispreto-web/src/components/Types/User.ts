export type UserResponse = {
     content: User[];
     totalPages: number;
}

export type User = {
     user_id: number;
	login: string;
	password: string;
	userType: number;
}

export type Category = {
     id: number;
     name: string;
}
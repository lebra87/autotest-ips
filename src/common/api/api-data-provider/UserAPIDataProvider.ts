type UpdateUserRequest = {
    name: string,
    bio: string,
    // userPronouns?: Pronouns,
    // userAvatar?: string,
}

class UserAPIDataProvider {
    public static getDeletedUserData(): UpdateUserRequest {
        return {
            name: '',
            bio: '',
        }
    }
}

export {
    UserAPIDataProvider,
    UpdateUserRequest,
}
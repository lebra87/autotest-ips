type UserSettingsData = {
    userName: string,
    //isPublicEmail: boolean,
    userPronouns: Pronouns,
    userBio: string,
    userAvatar: string,
}

enum Pronouns {
    'Do not specify',
    'they/them',
    'she/her',
    'he/him',
    'custom',
}

const userSettings: UserSettingsData = {
    userName: 'Ivan Ivanov',
    //isPublicEmail: false,
    userPronouns: 2,
    userBio: '@lebra87',
    userAvatar: '../src/users/data/img_jpg.jpg',
}

export {
    UserSettingsData,
    userSettings,
}
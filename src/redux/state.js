const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Yulia', likesCount: 15 },
            { id: 2, message: 'Valeria', likesCount: 20 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Yulia' },
            { id: 2, name: 'Valeria' },
            { id: 3, name: 'Ekaterina' }],
        messages: [
            { id: 1, message: 'Hii!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' }]
    }
}

export default state
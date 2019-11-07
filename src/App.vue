<script>
import '@coreui/coreui/dist/css/coreui.min.css';
import UserList from './UserList.vue';
import PostList from './PostList.vue';

export default {
    name: 'App',
    data() {
        return {
            userData: [],
            postData: {},
            selectedUserPosts: [],
            selectedUserName: null,
        };
    },
    components: {
        UserList,
        PostList,
    },
    methods: {
        async getUserPosts() {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url, {
                method: 'GET',
            }).then(body => (
                body.json()
            )).then(users => (
                users
            ));

            const newPosts = {};
            response.forEach((post) => {
                if (post.userId in newPosts) {
                    newPosts[post.userId].push(post);
                } else {
                    newPosts[post.userId] = [post];
                }
            });
            this.$data.postData = newPosts;
        },
        async getUsers() {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(url, {
                method: 'GET',
            }).then(body => (
                body.json()
            )).then(users => (
                users
            ));

            this.$data.userData = response;
            this.getUserPosts();
        },
        handleUserSelection(userId) {
            this.$data.selectedUserPosts = this.$data.postData[userId];
            this.$data.selectedUserName = this.$data.userData[userId - 1].username;
        },
    },
    async created() {
        await this.getUsers();
    },
};
</script>

<template>
    <div class="App">
        <PostList
            v-bind:name="this.$data.selectedUserName"
            v-bind:posts="this.$data.selectedUserPosts"
        ></PostList>
        <UserList
            v-bind:users="this.$data.userData"
            @setSelectedUserPosts="handleUserSelection"
        ></UserList>
    </div>
</template>

<style>
    .App {
        display: grid;
        grid-template-columns: 450px 1fr;
        grid-template-areas: 'users posts';
        height: 100vh;
    }

    div::-webkit-scrollbar {
        width: 5px;
    }

    div::-webkit-scrollbar-button
    div::-webkit-scrollbar-track,
    div::-webkit-scrollbar-track-piece,
    div::-webkit-scrollbar-resizer {
        background: hsla(0, 0%, 20%, 0.6);
    }

    div::-webkit-scrollbar-thumb {
        background: hsla(0, 0%, 20%, 0.6);
        border-radius: 8px;
    }
</style>

<script>
import WaveAnimation from './WaveAnimation.vue';

export default {
    name: 'UserList',
    props: ['users'],
    components: {
        WaveAnimation,
    },
};
</script>

<template>
    <div class="UserList">
        <ul class="UserList__user-list" v-if="users.length > 0">
            <li class="UserList__user" v-for="user in this.users">
                <span class="UserList__user-info-wrapper">
                    <h2 class="UserList__username">
                        {{ user.username }}
                    </h2>
                    <button
                        class="UserList__see-posts btn btn-primary"
                        @click="$emit('setSelectedUserPosts', user.id)"
                    >
                        See {{ user.username }}'s Posts
                    </button>
                </span>
                <h4 class="UserList__text UserList__user-name">{{ user.name }}</h4>
                <h4 class="UserList__text UserList__user-website">
                    {{ user.email }} &middot;
                    <a v-bind:href="'http://'+user.website">{{ user.website }}</a>
                </h4>
                <h4 class="UserList__text">
                    {{ user.phone }}
                </h4>
                <h3 class="UserList__company">
                    Works at {{ user.company.name }}
                </h3>
                <h5 class="UserList__text UserList__slogan">
                    {{ user.company.catchPhrase }}
                </h5>
            </li>
        </ul>
        <WaveAnimation v-else></WaveAnimation>
    </div>
</template>

<style>
    .UserList {
        grid-area: users;
        overflow-y: auto;
        margin: 5px 0;
        margin-right: 5px;
        padding-right: 10px;
        padding-left: 20px;
    }

    .UserList__user-list {
        padding: 0;
        width: max-content;
    }

    .UserList__see-posts {
        border-radius: 20px;
        padding: 2px 6px;
        margin-bottom: 4px;
        width: max-content;
        justify-self: flex-end;
        align-self: center;
    }

    .UserList__text {
        font-size: 14px;
        margin-bottom: 2px;
        color: #73818f;
    }

    .UserList__user {
        list-style-type: none;
        padding: 15px 0;
    }

    .UserList__user-info-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'username see-posts';
        grid-gap: 10px;
    }

    .UserList__username {
        font-size: 24px;
        display: inline-block;
        width: max-content;
    }

    .UserList__username:hover {
        text-decoration: underline;
    }

    .UserList__user-name {
        color: #23282c;
        margin-top: -8px;
        margin-bottom: 10px;
    }

    .UserList__company {
        font-size: 16px;
        margin-bottom: 2px;
        margin-top: 8px;
    }

    .UserList__slogan {
        font-size: 12px;
        font-style: italic;
    }
</style>

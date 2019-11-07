<script>
export default {
    name: 'PostList',
    props: ['posts', 'name'],
    data() {
        return {
            showPost: null,
        };
    },
    methods: {
        togglePostBody(postId) {
            if (this.$data.showPost && this.$data.showPost === postId) {
                this.$data.showPost = null;
            } else {
                this.$data.showPost = postId;
            }
        },
    },
    created() {
        console.log(this.$data);
    },
};
</script>

<template>
    <div class="PostList">
        <h1
            class="PostList__title"
            v-if="this.name"
        >
            {{ this.name }}'s Posts
        </h1>
        <ul class="PostList__list" v-if="this.posts.length > 0">
            <li
                class="PostList__post"
                v-for="post in this.posts"
            >
                <h3
                    class="PostList__post-title"
                    @click="togglePostBody(post.id)"
                >
                    {{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}
                </h3>
                <transition name="slide">
                    <p
                        class="PostList__post-body"
                        v-if="showPost === post.id"
                    >
                        {{ post.body.charAt(0).toUpperCase() + post.body.slice(1) }}
                    </p>
                </transition>
            </li>
        </ul>
        <h2 class="PostList__default-message" v-else>Select a User to see their posts</h2>
    </div>
</template>

<style>
    .PostList {
        grid-area: posts;
        width: 100%;
        padding-top: 60px;
        overflow-y: auto;
        overflow-wrap: break-word;
        border-left: 1px solid hsla(0, 0%, 20%, 0.6);
    }

    .PostList__default-message {
        width: max-content;
        margin: auto;
        margin-top: 240px;
    }

    .PostList__title {
        width: 60%;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    .PostList__list {
        padding: 0;
        list-style: none;
        width: 100%;
    }

    .PostList__post {
        width: 60%;
        margin: 20px auto;
    }

    .PostList__post-body {
        width: 80%;
        max-height: 500px;
    }

    .PostList__post-title:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .slide-enter-active {
        transition: all .4s;
    }
    .slide-leave-active {
        transition: all .2s;
    }

    .slide-enter, .slide-leave-to {
        max-height: 0;
        opacity: 0;
    }
</style>

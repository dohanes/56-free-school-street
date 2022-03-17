<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">56 Free School Street</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="active" to="/thoughts">Schoolgoer's Thoughts</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="active" to="/sponsors">Sponsors</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://zorrosthoughts.blogspot.com/" target="_blank">Zorro's Blog</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>

class GitHub {

    constructor() {
        this.client_id = "5355ab6033b5dab3d2c7";
        this.client_secret = "49f17798343d20c5ba39dd289c1fde2aac383977";
        this.repos_count=5;
        this.repos_sort='created : asc';

    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos=await reposResponse.json();
        return {
            profile,
            repos
        }
    }



}
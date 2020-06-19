const queryArgs = {
    devsByFirstName: (queryValue) => `(name:"${queryValue})`,
    devsByLastName: (queryValue) => `(name:"${queryValue})`,
    devsByFavLang: (queryValue) => `(language:"${queryValue})`,
    devsByYearStarted: (queryValue) => `(year:"${queryValue})`,

}
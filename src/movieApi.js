export function requestMovies() {
    return new Promise(resolve => setTimeout(
        () =>
            resolve([
                {title: 'rebel without a cause', date: 'Monday'},
                {title: 'Ghost in the shell', date: 'Tuesday'},
                {title: 'High Noon', date: 'Monday'}
            ]),
            1000
        )
    );
}
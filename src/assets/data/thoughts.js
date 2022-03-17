const authors = {
    zorro: {
        name: 'Zorro Ohanessian',
        tenure: '1951-1961'
    }
}

export default [
    {
        id: 'anecdotes',
        name: 'Anecdotes',
        description: 'To upload, please forward your favorite anecdotes during your school time to 56freeschoolstreet@gmail.com.',
        thoughts: [],
    },
    {
        id: 'favorite-tutor',
        name: 'Favorite Tutor',
        description: 'Please forward your favorite instructor and why they impacted your life to 56freeschoolstreet@gmail.com.',
        thoughts: [
            {
                author: authors.zorro,
                content: 'Mr. Basu was one of my favorite teachers together with Mr. Guzelian. Both were caring individuals who looked out for the best in the students. They never shrank from answering questions and going out of their way to understand what was it you needed and made sure you had the proper answer. they always stand out in my contents even 60 or so years ago.'
            }
        ]
    },
    {
        id: 'sports',
        name: 'Sports',
        description: 'Tell us what was your favorite sport during your school time at 56freeschoolstreet@gmail.com.',
        thoughts: []
    },
    {
        id: 'tenure',
        name: 'Tenure',
        description: 'What years did you attend the Armenian College? Email it with your name to 56freeschoolstreet@gmail.com.',
        thoughts: []
    },
    {
        id: 'best-friend',
        name: 'Best Friend',
        description: 'Tell us who was your best friends during your school years at 56freeschoolstreet@gmail.com.',
        thoughts: []
    },
    {
        id: 'favorite-movie',
        name: 'Favorite Movie',
        description: 'Tell us your favorite movie during your stay at the Armenian College at 56freeschoolstreet@gmail.com.',
        thoughts: [
            {
                author: authors.zorro,
                content: 'My favorite movie when I attended the Armenian College was called "A Certain Smile" and came out to the movie theatres in 1958.\nI saw it at the Elite cinema.It was just a beautiful movie and I had fallen in love with the actress Christine Carere who was French.\nI wanted to kill Rossano Brazzi who took her away from Bradford Dillman.\nI enjoyed the movie so much that I went back and watched it three more times and learnt the song "A Certain Smile" sung by the famous American singer Johnny Mathis.\nThe song became a big hit and I was asked to perform it at the LaMartiniere year- end concert.\nIt was a true love story that went wrong and redeemed itself at the end when the two young stars got back together.\nIt was a story we all dreamed about and hoped we\'d have the same possibilities. But alas we were left wanting.'
            }
        ]
    },
    {
        id: 'memory',
        name: 'Memory',
        description: 'Tell us your most important memory you have about your school days at 56freeschoolstreet@gmail.com.',
        thoughts: []
    },
    {
        id: 'photos',
        name: 'Photos',
        description: 'Send us your favorite school photo with a caption and the year to 56freeschoolstreet@gmail.com.',
        thoughts: []
    },
]
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANIT_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-05-01',
    useCdn: true,
    token: process.env.REACT_APP_SANIT_TOKEN,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
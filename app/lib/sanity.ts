import imageUrlBuilder  from "@sanity/image-url"
import { createClient, QueryParams } from "next-sanity";

export const client = createClient({
    projectId: 'zl2eg24w',
    dataset: 'ecommerce',
    apiVersion: '2022-03-25',
    useCdn: false, //set to false if statically generating pages, using ISR or tag based revalidation
})

export async function sanityFetch({
    query, 
    params = {},
    revalidate = 10, //default revalidation time in seconds
    tags = [],
}: {
    query: string;
    params?: QueryParams;
    revalidate?: number | false;
    tags?: string[];
}) {
    return client.fetch(query, params, {
        next: {
            revalidate: tags.length ? false : revalidate, //for simple, time based revalidation
            tags, //for tag based revalidation
        },
    });
}

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any){
    return builder.image(source)
}
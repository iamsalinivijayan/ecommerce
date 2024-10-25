import imageUrlBuilder  from "@sanity/image-url"
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'zl2eg24w',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any){
    return builder.image(source)
}
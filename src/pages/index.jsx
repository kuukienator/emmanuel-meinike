import React from 'react';
import PreviewLink from '../components/PreviewLink';

const COOL_THINGS = [
    {
        title: "Give me Amos",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Give me amos screenshot"
        }
    },
    {
        title: "Color palette generator",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Color palette generator screenshot"
        }
    },
    {
        title: "Where to go?",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Where to go? screenshot"
        }
    },
    {
        title: "Pixel me this!",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Pixel me this! screenshot"
        }
    },
    {
        title: "Generative art",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Generative art screenshot"
        }
    }
];

const CONTACT = [
    {
        label: "Xing",
        url: "https://www.xing.com/profile/Emmanuel_Meinike/cv",
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuel-meinike-11185541",
    },
    {
        label: "E-mail",
        url: "mailto:emmanuel.meinike@gmail.com",
    },
    {
        label: "Twitter",
        url: "https://twitter.com/kuukienator",
    }
];

const CODE = [
    {
        label: 'GitHub',
        url: 'https://github.com/kuukienator',
    },
    {
        label: 'Codepen',
        url: 'https://codepen.io/kuukienator',
    }
]

export default function Home() {
    return (
        <div className="container mx-auto flex flex-col my-24">
            <section className="my-5">
                <h1 className="text-5xl font-serif text-center">Hello, I'm Emmanuel <span role="img" aria-label="waving hand emoji">👋</span>.</h1>
                <p className="text-center">I'm a web developer that likes building small web things and creating generative art.</p>
            </section>

            <section className="my-5">
                <h2 className="text-3xl font-serif text-center">Wanna see some cool things?</h2>
                <div className="flex flex-wrap">
                    {COOL_THINGS.map(thing => (
                        <PreviewLink key={`${thing.title}-${thing.href}`} href={thing.href} image={thing.image} title={thing.title} />
                    ))}
                </div>
            </section>


            <section className="my-5">
                <h2 className="text-3xl font-serif text-center">Wanna look at some code?</h2>
                <ul>
                    {CODE.map(entry => (<li key={entry.label}><a href={entry.url} rel="noopener noreferrer" target="_blank">{entry.label}</a></li>))}
                </ul>
            </section>

            <section className="my-5">
                <h2 className="text-3xl font-serif text-center">Wanna talk?</h2>
                <ul>
                    {CONTACT.map(entry => (<li key={entry.label}><a href={entry.url} rel="noopener noreferrer" target="_blank">{entry.label}</a></li>))}
                </ul>
            </section>

            <footer className="bg-black text-white text-center w-full align-bottom">
                Emmanuel Meinike - 2021
            </footer>
        </div>
    );
}

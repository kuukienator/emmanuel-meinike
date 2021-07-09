import React from 'react';
import PreviewLink from '../components/PreviewLink';
import SectionHeader from '../components/SectionHeader';

import GitHubIcon from '../assets/github.svg';
import CodepenIcon from '../assets/codepen.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import MailIcon from '../assets/mail.svg';
import TwitterIcon from '../assets/twitter.svg';
import XingIcon from '../assets/x.svg';

const COOL_THINGS = [
    {
        title: "Give me Amos",
        text: "Get the best GIFs of Amos from The Expanse",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Give me amos screenshot"
        }
    },
    {
        title: "Color palette generator",
        text: "Get nice color palettes from images",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Color palette generator screenshot"
        }
    },
    {
        title: "Where to go?",
        text: "Find a nice place near you to get food or drinks",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Where to go? screenshot"
        }
    },
    {
        title: "Pixel me this!",
        text: "Create art using your photos",
        href: "google.com",
        image: {
            src: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt: "Pixel me this! screenshot"
        }
    },
    {
        title: "Generative art",
        text: "Collection of generative art experiments",
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
        icon: XingIcon,
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuel-meinike-11185541",
        icon: LinkedInIcon
    },
    {
        label: "E-mail",
        url: "mailto:emmanuel.meinike@gmail.com",
        icon: MailIcon
    },
    {
        label: "Twitter",
        url: "https://twitter.com/kuukienator",
        icon: TwitterIcon
    }
];

const CODE = [
    {
        label: 'GitHub',
        url: 'https://github.com/kuukienator',
        icon: GitHubIcon
    },
    {
        label: 'Codepen',
        url: 'https://codepen.io/kuukienator',
        icon: CodepenIcon
    }
]

export default function Home() {
    return (
        <div className="container mx-auto flex flex-col my-24">
            <section className="my-5">
                <h1 className="text-4xl md:text-5xl font-serif text-center">Hello there, I'm Emmanuel <span role="img" aria-label="waving hand emoji">👋</span>.</h1>
                <p className="text-center">
                    I like developing web things big and small, and creating generative art.
                </p>
            </section>

            <section className="my-5 flex flex-col font-bold">
                <SectionHeader>
                    # wanna see some cool things?
                </SectionHeader>
                <div className="flex flex-wrap">
                    {COOL_THINGS.map(thing => (
                        <PreviewLink key={`${thing.title}-${thing.href}`} href={thing.href} image={thing.image} title={thing.title} text={thing.text} />
                    ))}
                </div>
            </section>


            <section className="my-5 flex flex-col font-bold">
                <SectionHeader>
                    # wanna look at some code?
                </SectionHeader>
                <ul className="flex mx-auto my-2">
                    {CODE.map(entry => (
                        <li key={entry.label} className="mx-3">
                            <a href={entry.url} rel="noopener noreferrer" target="_blank">
                                <span className="flex justify-center items-center flex-col">
                                    <entry.icon width="30" height="30" />
                                    {entry.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="my-5 flex flex-col font-bold">
                <SectionHeader>
                    # wanna talk?
                </SectionHeader>
                <ul className="flex mx-auto my-2">
                    {CONTACT.map(entry => (
                        <li key={entry.label} className="mx-3">
                            <a href={entry.url} rel="noopener noreferrer" target="_blank">
                                <span className="flex justify-center items-center flex-col">
                                    <entry.icon width="30" height="30" />
                                    {entry.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="bg-black text-white text-center w-full align-bottom">
                Emmanuel Meinike - 2021
            </footer>
        </div>
    );
}

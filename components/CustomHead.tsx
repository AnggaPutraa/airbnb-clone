import Head from 'next/head'

const CustomHead = ({title}: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="https://i.pinimg.com/originals/5e/10/d7/5e10d70b73f61c76194ef63da8f5c22a.png" />
        </Head>
    );
}

export default CustomHead;

interface Props {
    title: string
}
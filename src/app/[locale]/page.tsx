export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: Promise<{ [key: string]: string | string[] }>;
}) {
    const sParams = await searchParams;

    return (
        <div>
            {Object.entries(sParams).map(([k, v]) => {
                return <p key={k}>{`${k}: ${v}`}</p>;
            })}
        </div>
    );
}
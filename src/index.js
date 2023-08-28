import qz from "qz-tray";

export const CERTIFICATE = `
MIIECzCCAvOgAwIBAgIGAYopWHYXMA0GCSqGSIb3DQEBCwUAMIGiMQswCQYDVQQG
EwJVUzELMAkGA1UECAwCTlkxEjAQBgNVBAcMCUNhbmFzdG90YTEbMBkGA1UECgwS
UVogSW5kdXN0cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMx
HDAaBgkqhkiG9w0BCQEWDXN1cHBvcnRAcXouaW8xGjAYBgNVBAMMEVFaIFRyYXkg
RGVtbyBDZXJ0MB4XDTIzMDgyMzIwNTkzN1oXDTQzMDgyMzIwNTkzN1owgaIxCzAJ
BgNVBAYTAlVTMQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYD
VQQKDBJRWiBJbmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMs
IExMQzEcMBoGCSqGSIb3DQEJARYNc3VwcG9ydEBxei5pbzEaMBgGA1UEAwwRUVog
VHJheSBEZW1vIENlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCo
zUqas3tp9TLiW9mn1P1QMfIYRPQHzSR4mLiOZO0P0az4vmKPPs+xQ7+WxK58eALq
kOir0YVhiy3U4FqS4fD2wo8+sSBOT01thXzTmk/MWTQFKWMGz7G83tmOaGeg0dgq
vAnLLILKH+kS9GDD2G7JmaLdJNiOHenO/WV/kgQ4mwZPVSq4p1cYMrVTpegRiZ4R
qs/LG2xKCL3d6Nuk1oaWJDgYoSSj5dmb9/EfZzeF4FhpBcqEu5o7ETyXHK16DIVZ
uHDqvpsMAarxIb5e9+Il8of/c+CvXxIyz63EdFaiolch1aM7rsa5TiAa93ZaAHou
Gow6fpy/CCWumd5WXkGnAgMBAAGjRTBDMBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYD
VR0PAQH/BAQDAgEGMB0GA1UdDgQWBBRTEwW8A4BdxKnQkYiCQdDU9siqxzANBgkq
hkiG9w0BAQsFAAOCAQEAd9TaZ2C7g12i5U0EIJf/aLPpdVFogd6RZy4rvaZaQ944
XfdOxYXROyfnECFlydchWl2iNhcnLeFmvr5I15t9QXWpW2ZVFGQF3bOFp/67N7RG
ZB5Ja7YOQscCD6VfBRMyuTcwvpsAI00Y5/GwyvavUZKIlQhLFn5+SCWEMnDC2uVu
lhSDu29OOkyRjJPrSzHm2dmR6au5uje6rX2M0br5u0ikcFvWHVpHosuKhLhgs3yN
Qk6ZuAdvVGqIVuF9YQJY/NOCIGu928GFP84+63r2q3+wosP/1dyLNu1JGouxq6L0
ZLeNVFEbxYit5tZBy1H+7smehBq7XUITIjCZN9/2xQ==
`;

export const PRIVATE_KEY = `
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCozUqas3tp9TLi
W9mn1P1QMfIYRPQHzSR4mLiOZO0P0az4vmKPPs+xQ7+WxK58eALqkOir0YVhiy3U
4FqS4fD2wo8+sSBOT01thXzTmk/MWTQFKWMGz7G83tmOaGeg0dgqvAnLLILKH+kS
9GDD2G7JmaLdJNiOHenO/WV/kgQ4mwZPVSq4p1cYMrVTpegRiZ4Rqs/LG2xKCL3d
6Nuk1oaWJDgYoSSj5dmb9/EfZzeF4FhpBcqEu5o7ETyXHK16DIVZuHDqvpsMAarx
Ib5e9+Il8of/c+CvXxIyz63EdFaiolch1aM7rsa5TiAa93ZaAHouGow6fpy/CCWu
md5WXkGnAgMBAAECggEAFLZ0Dr2H9D15IUYXVBJnhDKiETuiHLRIYwqNAt6m1B0X
YMJZF635EDhO8bIanaf1kPt3rArz7JSGatZIvDiV4mwx5YXDKrjCYyD7wH9Ghr2f
YM7DmZoHUN9LdL+iOkflgtY7TBSfISwp46sxlcvLSa4yH3lI9U9TBD9wTTyz4I9k
mG5Y3y+uMQ+NBB7k0+J7vM6Uy/iVXpKv2eVCnQ7FdaxfQgg/FDaYQY5woU+y3FZX
O/vb6RABFHL14mF8JCXj6050o74Ok7Y/82XppJErKNOo1tqHltqqQymj4aZkWyxp
CtZPJMHPchv8qPj+amEY8kmXLEdeid1sPE1fiIs+kQKBgQDlYmSOtaa+0iONa7gt
7WRTOKk9ggJeHItkfjqvU4GtmRmTiOoatc06rqNSw86q5Z3aHHaeWX8CMnONQnQQ
VoN64JCqqIf7J9DqxbdpoPZCN9sn1Cd5xn2XC9+4yqpMUaDt1oZAtVoLkH9mJann
DuyiQkXawnDJJdpIXV2RuPtuLwKBgQC8Y11rb95JaEoGhbkV6mYut94BB50KLBZP
Phd8VAD9j/jsiUdvZyErVREPe7TFKZNQE3pCxg9KDqnFcdFQKjAKfPwZgmaZYiHM
oMKzklX5C3K9ZSlJDudovHc1W0G/TsNpovA+YVSbn/hqUinqD9l92ZrFrV6gp/u4
80CR/qg+CQKBgDxAEeWiNQAeNhRpXOFDX3y0f0+WnISXvs1Qkp2Gs6MjeaJU7hjB
8/wb7u5IXDprQYEOxOFm5INxOQS7lbzM3JAj+Bu7VKxVkvx3nmtySfyuqzPU9+F2
j3pjNgpVwVF2h2yxUmYgvFwZQj1UW0JDm0grXCnPtMxA0wr66x7hlbklAoGAKRXu
qODD9PSGuHdvj0UItgWpqEXVzQMidnPPQXE8qhA9NLEX4Eb4p++sgdjz6tAPbbZh
wrBZY0hhZEtXYAljYtYxUQrsf2U0g+FHtUwj7eW+R2oJoAJdG62Gvh9B7owp+B7u
EFy/zBUOY3m55G9Cerz7kUMnURhxwLtkiLKmVKkCgYEAyHOgNy++JIuiPevCLEgt
6bxxLA9MQMcNLR9LgzBkMfs/6LXjF1H9OfXxy7Im/uEzi4k0mf7dshckM6NNMQKR
gtRWM6P2C+ZwKNu4TaVBcIXmtgxP0q+QY/HUip5/8dcG5eaFSqUJt1jd/rxW8A+F
1x2UyBHGFl9mGFrHf9LLAIQ=
`;

const connectToPrinter = async () => {
    try {
        // Set the certificate and signature
        await qz.security.setCertificatePromise(CERTIFICATE);
        await qz.security.setSignaturePromise(PRIVATE_KEY);

        // If the connection is not active, connect
        if (!qz.websocket.isActive()) {
            let printers = await qz.printers.find('Zebra LP2824-Z');
            if (printers && printers.length) {
                let config = createConfig(printers[0]);
                // config.reconfigure({
                //     copies: print_copies,
                // });
                // config.reconfigure({
                //     size: {'width': width, 'height': height},
                // });
                await qz.websocket.connect(config);
                getVersion();
                printLabel()
            } else {
                console.log("No printers found.");
            }
        }
        
    } catch (error) {
        console.error(error);
    }
};

const getVersion = async () => {
    let version = await qz.api.getVersion();
    console.log("QZ Tray Version:", version);
};

const createConfig = (printer) => {
    let config = qz.configs.create(printer);
    return config;
};


const printLabel = async () => {
    try {
        let config = await createConfig(await qz.printers.getDefault());
        
        let data = [
            "^XA",
            "^FO50,50^ADN,36,20^FDHello, Zebra^FS",
            "^XZ"
        ];

        await qz.print(config, data);
        console.log("Printed successfully!");
    } catch (error) {
        console.error("Error printing label:", error);
    }
};

// Invoke the main function
connectToPrinter();
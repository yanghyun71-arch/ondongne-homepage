// 기존 도메인(ssondongne.kr, www.ssondongne.kr)으로 들어온 접속을
// 새 대표 도메인 https://www.ssondongne.com 의 같은 경로로 301(영구 이동)시킵니다.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host === "ssondongne.kr" || host === "www.ssondongne.kr") {
    url.protocol = "https:";
    url.hostname = "www.ssondongne.com";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

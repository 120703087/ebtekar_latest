import { Html, Head, Main, NextScript } from 'next/document'
import { App, ConfigProvider } from 'antd';
import fa from "antd/locale/fa_IR"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ConfigProvider direction="rtl" locale={fa}>
          <App>
            <Main />
            <NextScript />
          </App>
        </ConfigProvider>
      </body>
    </Html>
  )
}

# datagsm-oauth-sdk-javascript

React 애플리케이션에서 Data GSM OAuth 서비스 연동을 라이브러리입니다.

## 설치

```bash
# npm
npm install datagsm-oauth-sdk-javascript

# pnpm
pnpm add datagsm-oauth-sdk-javascript

# yarn
yarn add datagsm-oauth-sdk-javascript
```

## 사용 방법

SDK를 사용하려면 애플리케이션(또는 인증이 필요한 부분)을 `OAuthProvider`로 감싸야 합니다.

### 1. Provider 설정

최상위 컴포넌트(예: `layout.tsx` 또는 `App.tsx`)를 `OAuthProvider`로 감싸고, 필수 값인 `clientId`와 `redirectUri`를 전달하세요.

```tsx
import { OAuthProvider } from 'datagsm-oauth-sdk-javascript';
import App from './App';

function Root() {
  return (
    <OAuthProvider
      clientId="YOUR_CLIENT_ID"
      redirectUri="YOUR_REDIRECT_URI"
    >
      <App />
    </OAuthProvider>
  );
}
```

| Prop          | Type     | Required | Description                               |
|---------------|----------|----------|-------------------------------------------|
| `clientId`    | `string` | Yes      | Data GSM 애플리케이션 클라이언트 ID.      |
| `redirectUri` | `string` | Yes      | 로그인 성공 후 리다이렉트될 URL.          |
| `children`    | `node`   | Yes      | 컨텍스트 내에서 렌더링될 React 자식 요소. |

### 2. 사용 예시

`OAuthLoginButton` 컴포넌트를 사용하여 OAuth 로그인 흐름을 시작하는 버튼을 렌더링할 수 있습니다.
이 컴포넌트는 기본 스타일이 없는(unstyled) 버튼이므로, `className` 등을 통해 자유롭게 스타일링할 수 있습니다.

```tsx
import { OAuthLoginButton } from 'datagsm-oauth-sdk-javascript';

function LoginPage() {
  return (
    <>
      {/* 기본 사용 */}
      <OAuthLoginButton />

      {/* 커스텀 스타일 적용 */}
      <OAuthLoginButton className="login-btn custom-style">
        Data GSM으로 시작하기
      </OAuthLoginButton>
    </>
  );
}
```

표준 HTML 버튼(`HTMLButtonElement`)의 모든 props를 지원합니다.

| Prop       | Type   | Default             | Description |
|------------|--------|---------------------|-------------|
| `children` | `node` | `'Data GSM 로그인'` | 버튼 내용. |

### 3. useOAuth 훅 사용하기

더 세밀한 제어가 필요하거나 커스텀 컴포넌트에서 로그인을 트리거하고 싶다면 `useOAuth` 훅을 사용할 수 있습니다.

```tsx
import { useOAuth } from 'datagsm-oauth-sdk-javascript';

function CustomLoginButton() {
  const { login } = useOAuth();

  return (
    <button onClick={login} type="button">
      커스텀 로그인 버튼
    </button>
  );
}
```

`useOAuth` 훅은 다음 속성을 가진 객체를 반환합니다:

- `login`: `() => void` - 로그인 페이지로 리다이렉트하는 함수.
- `clientId`: `string` - 설정된 클라이언트 ID.
- `redirectUri`: `string` - 설정된 리다이렉트 URI.

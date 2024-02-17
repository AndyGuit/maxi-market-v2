import { IconAccount, IconMainLogo } from '@/components/Icons/Icons';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

export default function Home() {
  return (
    <div className="bg-secondary">
      <h1 className="header-1">maxi market</h1>
      <IconMainLogo />
      <Button type="button" style="wide-secondary">
        Увійти
      </Button>
      <Input type="text" style="subscribe" />
    </div>
  );
}

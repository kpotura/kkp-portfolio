import SiteFooter from './SiteFooter.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage({ login, site }) {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="index.html" aria-label={`${site.name} home`}>
          {site.initials}
        </a>
        <a className="back-link" href={login.back_link}>
          {login.back_label}
        </a>
      </header>

      <main className="login-main">
        <Card
          role="region"
          className="login-card w-full gap-0 rounded-[var(--radius)] p-10 shadow-[0_16px_50px_rgba(36,30,23,.06)]"
          aria-labelledby="login-title"
        >
          <CardHeader className="block px-0">
            <p className="eyebrow">{login.eyebrow}</p>
            <CardTitle>
              <h1 id="login-title">{login.heading}</h1>
            </CardTitle>
            <CardDescription className="lede leading-[1.6]">{login.intro}</CardDescription>
          </CardHeader>

          <CardContent className="px-0">
            <form className="login-form grid gap-[18px]" action="#" method="post">
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-[.9rem] leading-[1.6] font-bold">
                  {login.password_label}
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="h-12 rounded-xl bg-white px-3.5 text-base shadow-none md:text-base focus-visible:ring-ring/20"
                />
              </div>

              <Button type="submit" className="mt-1 h-12 cursor-pointer rounded-full px-5 font-bold shadow-none hover:bg-black">
                {login.button}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="px-0">
            <p className="login-note">{login.note}</p>
          </CardFooter>
        </Card>
      </main>

      <SiteFooter site={site} />
    </>
  );
}

import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="headline mt-4 text-5xl">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          That page does not exist. Head back home or book an inspection.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </Section>
  );
}

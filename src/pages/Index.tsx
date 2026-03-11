import sarguTrans from "@/assets/sargu_trans.jpg";
import enjenLogo from "@/assets/enjen-logo-black.png";
import nbKids from "@/assets/NB_Kids.jpg";
import nbBoutique from "@/assets/NB_Boutique.jpg";
import refindCommerce from "@/assets/ReFind_Commerce.webp";
import easyTag from "@/assets/easyTag.png";
import avtotest7 from "@/assets/avtotest7.jpg";

const clients = [
  { name: "ReFind Commerce", logo: refindCommerce },
  { name: "EasyTag", logo: easyTag },
  { name: "EnJen Digital", logo: enjenLogo },
  { name: "Sargu-Trans", logo: sarguTrans },
  { name: "Avtotest7", logo: avtotest7 },
  { name: "NB Boutique", logo: nbBoutique },
  { name: "NB Kids", logo: nbKids },
];

const steps = [
  "Подключение к API системы ресторана",
  "Сбор и обработка данных",
  "Разработка AI-анализа",
  "Формирование автоматического отчёта",
  "Тестирование и передача системы",
];

const included = [
  "Разработка системы",
  "Интеграция с API",
  "Настройка AI-анализа",
  "Сервер для работы системы на первый месяц",
  "Токены AI на первый месяц",
];

const results = [
  "Сокращение времени анализа данных",
  "Быстрый доступ к ключевым показателям",
  "Упрощение принятия управленческих решений",
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">{children}</h2>
);

const Divider = () => <div className="border-t border-border my-10" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-8 py-16 print:py-8">
        {/* Header */}
        <header className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Коммерческое предложение
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-4">
            AI-система анализа ресторанных данных
            <br />
            <span className="text-muted-foreground">для сети Yapona Mama</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Автоматический анализ данных из системы управления рестораном с формированием кратких управленческих выводов.
          </p>
        </header>

        <Divider />

        {/* Цель проекта */}
        <section className="mb-10">
          <SectionTitle>Цель проекта</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Разработать систему, которая автоматически анализирует данные и отчёты из системы управления рестораном и формирует краткий текстовый вывод с ключевыми показателями и изменениями. Это позволит руководству получать быстрый анализ бизнеса без необходимости тратить время на ручное изучение отчётов.
          </p>
        </section>

        {/* Проблема */}
        <section className="mb-10">
          <SectionTitle>Проблема</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            В текущей системе анализ данных занимает значительное время, так как отчёты содержат много текста и цифр. Руководству приходится тратить около часа на получение ключевых выводов.
          </p>
        </section>

        {/* Решение */}
        <section className="mb-10">
          <SectionTitle>Предлагаемое решение</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Создать систему, которая:</p>
          <ul className="space-y-2">
            {[
              "Автоматически получает данные из системы ресторана через API",
              "Обрабатывает показатели продаж и активности",
              "Формирует краткий текстовый отчёт с основными выводами",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* Результат */}
        <section className="mb-10">
          <SectionTitle>Результат внедрения</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map((r, i) => (
              <div key={i} className="rounded-2xl bg-secondary p-5">
                <div className="text-2xl font-semibold text-foreground mb-2">0{i + 1}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Этапы */}
        <section className="mb-10">
          <SectionTitle>Этапы реализации</SectionTitle>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-medium text-muted-foreground w-6 shrink-0">{i + 1}.</span>
                <span className="text-sm text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Стоимость */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex-1">
              <SectionTitle>Стоимость проекта</SectionTitle>
              <p className="text-sm text-muted-foreground mb-1">Срок разработки: 2–3 недели</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold tracking-tight text-foreground">$2,000</div>
              <p className="text-xs text-muted-foreground mt-1">USD, фиксированная стоимость</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">В стоимость входит</p>
              <ul className="space-y-2">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Со второго месяца клиент оплачивает</p>
              <ul className="space-y-2">
                {["Сервер", "Токены AI"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* Клиенты */}
        <section className="mb-10">
          <SectionTitle>Наши клиенты</SectionTitle>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="w-16 h-16 rounded-2xl bg-secondary overflow-hidden flex items-center justify-center p-2"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Резюме */}
        <section className="mb-16">
          <div className="rounded-2xl bg-secondary p-8">
            <p className="text-sm text-foreground leading-relaxed text-center">
              AI-система позволит сети <span className="font-semibold">Yapona Mama</span> получать краткие управленческие выводы автоматически, экономя время и облегчая принятие решений.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Коммерческое предложение · Конфиденциально
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

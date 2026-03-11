import { motion } from "framer-motion";
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

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">{children}</h2>
);

const Divider = () => <div className="border-t border-border my-10" />;

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    variants={fade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className={className}
  >
    {children}
  </motion.section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-8 py-16 print:py-8">
        {/* Header */}
        <motion.header
          className="mb-16 rounded-3xl bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 p-10 -mx-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Коммерческое предложение
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-4">
            AI-система анализа ресторанных данных
            <br />
            <span className="text-muted-foreground">для сети Yapona Mama 🍣🌸</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Автоматический анализ данных из системы управления рестораном с формированием кратких управленческих выводов.
          </p>
        </motion.header>

        <Divider />

        {/* Цель проекта */}
        <Section className="mb-10">
          <SectionTitle>Цель проекта</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Разработать интеллектуальную систему анализа данных для сети Yapona Mama, которая автоматически собирает информацию из системы управления рестораном и формирует краткий и понятный отчёт для руководства с ключевыми показателями.
            <br /><br />
            Это позволит экономить время менеджеров и CEO, сразу видеть тренды продаж, популярность блюд и динамику ресторанов без ручного изучения длинных отчётов.
          </p>
        </Section>

        {/* Проблема */}
        <Section className="mb-10">
          <SectionTitle>Проблема</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            В текущей системе анализ данных занимает значительное время, так как отчёты содержат много текста и цифр. Руководству приходится тратить около часа на получение ключевых выводов, что затрудняет оперативное принятие решений.
          </p>
        </Section>

        {/* Решение */}
        <Section className="mb-10">
          <SectionTitle>Предлагаемое решение</SectionTitle>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Создать AI-систему управления данными, которая:</p>
          <motion.ul className="space-y-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              "Автоматически собирает и агрегирует показатели всех ресторанов через API",
              "Обрабатывает показатели продаж, среднего чека и активности ресторанов",
              "Формирует компактный и понятный отчёт с основными выводами",
            ].map((item, i) => (
              <motion.li key={i} variants={fade} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </Section>

        <Divider />

        {/* Результат */}
        <Section className="mb-10">
          <SectionTitle>Результат внедрения</SectionTitle>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {results.map((r, i) => (
              <motion.div key={i} variants={fade} className="rounded-2xl bg-secondary p-5">
                <div className="text-2xl font-semibold text-foreground mb-2">0{i + 1}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Divider />

        {/* Пример работы AI */}
        <Section className="mb-10">
          <SectionTitle>Пример работы AI-системы</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Запрос */}
            <div className="rounded-2xl bg-secondary p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Запрос</p>
              <div className="space-y-1.5 text-sm text-foreground">
                <p>Дата: 10 марта 2026</p>
                <p>Рестораны: все филиалы</p>
                <p>Данные: продажи, средний чек, заказы, популярные блюда</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Задача: краткий отчёт для CEO</p>
            </div>

            {/* Ответ */}
            <div className="rounded-2xl bg-secondary p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Ответ AI</p>
              <div className="space-y-1.5 text-sm text-foreground">
                <p>Выручка: <span className="font-semibold">12,430 USD</span></p>
                <p>Средний чек: <span className="font-semibold">560 USD</span></p>
                <p>Заказов: <span className="font-semibold">1 420</span></p>
                <p>Лучший филиал: <span className="font-semibold">Центр</span></p>
                <p className="text-muted-foreground">Топ: Филадельфия ролл, Том Ям, Унаги сеты</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Время анализа: &lt;1 минута</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            AI автоматически собирает данные и формирует краткий управленческий отчёт, экономя время CEO.
          </p>
        </Section>

        <Divider />

        {/* Этапы */}
        <Section className="mb-10">
          <SectionTitle>Этапы реализации</SectionTitle>
          <motion.div
            className="space-y-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={fade} className="flex items-center gap-4">
                <span className="text-xs font-medium text-muted-foreground w-6 shrink-0">{i + 1}.</span>
                <span className="text-sm text-foreground">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Divider />

        {/* Стоимость */}
        <Section className="mb-10">
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
        </Section>

        <Divider />

        {/* Клиенты */}
        <Section className="mb-10">
          <SectionTitle>Наши клиенты</SectionTitle>
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-start justify-items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client) => (
              <motion.div key={client.name} variants={fade} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-2xl bg-secondary overflow-hidden flex items-center justify-center p-2"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">{client.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Divider />

        {/* Резюме */}
        <Section className="mb-16">
          <div className="rounded-2xl bg-secondary p-8">
            <p className="text-sm text-foreground leading-relaxed text-center">
              AI-система позволит сети <span className="font-semibold">Yapona Mama</span> получать краткие управленческие выводы автоматически, экономя время и облегчая принятие решений.
            </p>
          </div>
        </Section>

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

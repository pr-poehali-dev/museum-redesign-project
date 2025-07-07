import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-museum-accent via-white to-museum-warm/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-museum-primary rounded-full flex items-center justify-center animate-float">
                <Icon name="Building" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-museum-charcoal">
                  Экскурсионно-просветительский центр
                </h1>
                <p className="text-sm text-museum-charcoal/70 font-body">
                  Московский университет
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-museum-charcoal hover:text-museum-primary transition-colors font-body font-medium"
              >
                Главная
              </a>
              <a
                href="#news"
                className="text-museum-charcoal hover:text-museum-primary transition-colors font-body font-medium"
              >
                Новости
              </a>
              <a
                href="#history"
                className="text-museum-charcoal hover:text-museum-primary transition-colors font-body font-medium"
              >
                История
              </a>
            </nav>
            <Button className="hidden md:flex bg-museum-primary hover:bg-museum-primary/90 text-white">
              Записаться на экскурсию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-museum-secondary/20 text-museum-secondary border-museum-secondary/30">
              🎓 Открыт для посещения
            </Badge>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-museum-charcoal mb-6 leading-tight">
              Откройте для себя
              <span className="text-museum-primary">историю</span>
              <br />
              образования
            </h2>
            <p className="text-xl text-museum-charcoal/70 font-body mb-8 max-w-2xl mx-auto">
              Погрузитесь в увлекательный мир университетской истории через
              интерактивные экспозиции, редкие артефакты и познавательные
              экскурсии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-museum-primary hover:bg-museum-primary/90 text-white px-8"
              >
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Забронировать экскурсию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-museum-secondary text-museum-secondary hover:bg-museum-secondary/10"
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-museum-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-museum-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-6 h-6 text-museum-primary" />
                </div>
                <div className="text-3xl font-bold text-museum-charcoal mb-2">
                  15,000+
                </div>
                <div className="text-sm text-museum-charcoal/70 font-body">
                  Посетителей в год
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-museum-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-museum-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="BookOpen"
                    className="w-6 h-6 text-museum-secondary"
                  />
                </div>
                <div className="text-3xl font-bold text-museum-charcoal mb-2">
                  200+
                </div>
                <div className="text-sm text-museum-charcoal/70 font-body">
                  Экспонатов
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-museum-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-museum-warm/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="w-6 h-6 text-museum-darker" />
                </div>
                <div className="text-3xl font-bold text-museum-charcoal mb-2">
                  150
                </div>
                <div className="text-sm text-museum-charcoal/70 font-body">
                  Лет истории
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-museum-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-museum-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-6 h-6 text-museum-primary" />
                </div>
                <div className="text-3xl font-bold text-museum-charcoal mb-2">
                  45
                </div>
                <div className="text-sm text-museum-charcoal/70 font-body">
                  Минут экскурсии
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-museum-charcoal mb-4">
              Последние новости
            </h3>
            <p className="text-museum-charcoal/70 font-body max-w-2xl mx-auto">
              Следите за событиями и новыми экспозициями нашего центра
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-museum-secondary/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-museum-primary/10 text-museum-primary">
                  <Icon name="Calendar" className="w-3 h-3 mr-1" />
                  15 декабря
                </Badge>
                <CardTitle className="font-heading text-museum-charcoal">
                  Новая интерактивная экспозиция
                </CardTitle>
                <CardDescription className="font-body">
                  Открытие зала "Студенческая жизнь XIX века" с уникальными
                  артефактами и мультимедийными инсталляциями.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-museum-primary hover:bg-museum-primary/10 p-0"
                >
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-museum-secondary/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-museum-secondary/10 text-museum-secondary">
                  <Icon name="Calendar" className="w-3 h-3 mr-1" />
                  10 декабря
                </Badge>
                <CardTitle className="font-heading text-museum-charcoal">
                  Лекция "Архитектура кампуса"
                </CardTitle>
                <CardDescription className="font-body">
                  Специальная лекция об архитектурном наследии университета с
                  участием ведущих историков.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-museum-secondary hover:bg-museum-secondary/10 p-0"
                >
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-museum-secondary/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-museum-warm/30 text-museum-darker">
                  <Icon name="Calendar" className="w-3 h-3 mr-1" />5 декабря
                </Badge>
                <CardTitle className="font-heading text-museum-charcoal">
                  Конкурс студенческих проектов
                </CardTitle>
                <CardDescription className="font-body">
                  Приглашаем студентов к участию в конкурсе исследовательских
                  проектов по истории университета.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-museum-darker hover:bg-museum-warm/20 p-0"
                >
                  Подробнее
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-museum-charcoal mb-4">
              История университета
            </h3>
            <p className="text-museum-charcoal/70 font-body max-w-2xl mx-auto">
              Путешествие через полтора века академических традиций и открытий
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-museum-secondary/30 rounded-full"></div>
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12">
                  <Card className="border-museum-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-museum-primary font-heading">
                        1875
                      </CardTitle>
                      <CardDescription className="font-body">
                        Основание университета императорским указом. Первые 120
                        студентов начали обучение в арендованном здании.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-museum-primary rounded-full flex items-center justify-center relative z-10">
                  <Icon name="GraduationCap" className="w-4 h-4 text-white" />
                </div>
                <div className="w-5/12"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-museum-secondary rounded-full flex items-center justify-center relative z-10">
                  <Icon name="Building2" className="w-4 h-4 text-white" />
                </div>
                <div className="w-5/12">
                  <Card className="border-museum-secondary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-museum-secondary font-heading">
                        1890
                      </CardTitle>
                      <CardDescription className="font-body">
                        Строительство главного корпуса. Университет получил
                        собственное здание в неоклассическом стиле.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-5/12">
                  <Card className="border-museum-warm/30 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-museum-darker font-heading">
                        1920
                      </CardTitle>
                      <CardDescription className="font-body">
                        Революционные изменения в образовании. Открытие новых
                        факультетов и демократизация обучения.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-museum-darker rounded-full flex items-center justify-center relative z-10">
                  <Icon name="Lightbulb" className="w-4 h-4 text-white" />
                </div>
                <div className="w-5/12"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-museum-primary rounded-full flex items-center justify-center relative z-10">
                  <Icon name="Trophy" className="w-4 h-4 text-white" />
                </div>
                <div className="w-5/12">
                  <Card className="border-museum-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-museum-primary font-heading">
                        2025
                      </CardTitle>
                      <CardDescription className="font-body">
                        Современность. Университет - ведущий исследовательский
                        центр с международным признанием.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-museum-primary to-museum-secondary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Станьте частью истории
          </h3>
          <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам посетителей, которые уже открыли для себя
            богатое наследие нашего университета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-museum-primary hover:bg-white/90"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Записаться на экскурсию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="Mail" className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-museum-charcoal text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 font-body text-sm">
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  ул. Университетская, 1
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@museum.university.ru
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Часы работы</h4>
              <div className="space-y-2 font-body text-sm">
                <div>Пн-Пт: 9:00 - 18:00</div>
                <div>Сб: 10:00 - 16:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Разделы</h4>
              <div className="space-y-2 font-body text-sm">
                <div>
                  <a
                    href="#"
                    className="hover:text-museum-primary transition-colors"
                  >
                    Главная
                  </a>
                </div>
                <div>
                  <a
                    href="#news"
                    className="hover:text-museum-primary transition-colors"
                  >
                    Новости
                  </a>
                </div>
                <div>
                  <a
                    href="#history"
                    className="hover:text-museum-primary transition-colors"
                  >
                    История
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-museum-primary transition-colors"
                  >
                    Экскурсии
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Icon name="Facebook" className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Icon name="Instagram" className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Icon name="Youtube" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center font-body text-sm">
            <p>
              &copy; 2025 Экскурсионно-просветительский центр. Все права
              защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

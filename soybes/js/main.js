(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel removed: using a static header image instead of Owl Carousel
    
    // Simple i18n language switcher
    const i18n = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.pages': 'Pages',
            'nav.features': 'Features',
            'nav.free_quote': 'Free Quote',
            'nav.contact': 'Contact',
            'nav.language': 'Language',
            'hero.subtitle': 'Transport & Logistics Solution',
            'hero.title': '#1 Place For Your Logistics Solution',
            'hero.paragraph': 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
            'btn.read_more': 'Read More',
            'btn.free_quote': 'Free Quote',
            'about.subtitle': 'About Us',
            'about.title': 'Quick Transport and Logistics Solutions',
            'about.paragraph': 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.',
            'about.feature1_title': 'Global Coverage',
            'about.feature1_text': 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
            'about.feature2_title': 'On Time Delivery',
            'about.feature2_text': 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
            'btn.explore_more': 'Explore More',
            'services.small_title': 'Our Services',
            'services.title': 'Explore Our Services',
            'service.air': 'Air Freight',
            'service.ocean': 'Ocean Freight',
            'service.road': 'Road Freight',
            'service.train': 'Train Freight',
            'service.customs': 'Customs Clearance',
            'service.warehouse': 'Warehouse Solutions',
            'footer.address_title': 'Address',
            'footer.services_title': 'Services',
            'footer.quick_links_title': 'Quick Links',
            'footer.newsletter_title': 'Newsletter',
            'footer.newsletter_text': 'Dolor amet sit justo amet elitr clita ipsum elitr est.',
            'footer.email_placeholder': 'Your email',
            'footer.signup': 'SignUp'
        },
        tr: {
            'nav.home': 'Anasayfa',
            'nav.about': 'Hakkımızda',
            'nav.services': 'Hizmetler',
            'nav.pages': 'Sayfalar',
            'nav.features': 'Özellikler',
            'nav.free_quote': 'Ücretsiz Teklif',
            'nav.contact': 'İletişim',
            'nav.language': 'Language',
            'hero.subtitle': 'Taşımacılık ve Lojistik Çözümü',
            'hero.title': 'Lojistik Çözümünüz İçin #1 Yer',
            'hero.paragraph': 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.',
            'btn.read_more': 'Daha Fazla',
            'btn.free_quote': 'Ücretsiz Teklif',
            'about.subtitle': 'Hakkımızda',
            'about.title': 'Hızlı Taşımacılık ve Lojistik Çözümleri',
            'about.paragraph': 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.',
            'about.feature1_title': 'Küresel Kapsam',
            'about.feature1_text': 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
            'about.feature2_title': 'Zamanında Teslimat',
            'about.feature2_text': 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.',
            'btn.explore_more': 'Keşfet',
            'services.small_title': 'Hizmetlerimiz',
            'services.title': 'Hizmetlerimizi Keşfedin',
            'service.air': 'Hava Taşımacılığı',
            'service.ocean': 'Deniz Taşımacılığı',
            'service.road': 'Kara Taşımacılığı',
            'service.train': 'Tren Taşımacılığı',
            'service.customs': 'Gümrükleme',
            'service.warehouse': 'Depolama Çözümleri',
            'footer.address_title': 'Adres',
            'footer.services_title': 'Hizmetler',
            'footer.quick_links_title': 'Hızlı Bağlantılar',
            'footer.newsletter_title': 'Bülten',
            'footer.newsletter_text': 'Dolor amet sit justo amet elitr clita ipsum elitr est.',
            'footer.email_placeholder': 'E-posta adresiniz',
            'footer.signup': 'Kayıt Ol'
        }
    };
    // Additional translation keys for other pages
    // (merge into existing objects)
    i18n.en['page.about_header'] = 'About Us';
    i18n.tr['page.about_header'] = 'Hakkımızda';
    i18n.en['page.service_header'] = 'Services';
    i18n.tr['page.service_header'] = 'Hizmetler';
    i18n.en['page.feature_header'] = 'Features';
    i18n.tr['page.feature_header'] = 'Özellikler';
    i18n.en['page.quote_header'] = 'Quote';
    i18n.tr['page.quote_header'] = 'Teklif';
    i18n.en['quote.small_title'] = 'Get A Quote';
    i18n.tr['quote.small_title'] = 'Teklif Alın';
    i18n.en['quote.title'] = 'Request A Free Qoute!';
    i18n.tr['quote.title'] = 'Ücretsiz Teklif Talep Edin!';
    i18n.en['quote.paragraph'] = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.';
    i18n.tr['quote.paragraph'] = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.';
    i18n.en['quote.call_for_query'] = 'Call for any query!';
    i18n.tr['quote.call_for_query'] = 'Herhangi bir sorunuz için arayın!';
    i18n.en['quote.phone'] = '+012 345 6789';
    i18n.tr['quote.phone'] = '+012 345 6789';
    i18n.en['form.name_placeholder'] = 'Your Name';
    i18n.tr['form.name_placeholder'] = 'İsminiz';
    i18n.en['form.email_placeholder'] = 'Your Email';
    i18n.tr['form.email_placeholder'] = 'E-posta adresiniz';
    i18n.en['form.mobile_placeholder'] = 'Your Mobile';
    i18n.tr['form.mobile_placeholder'] = 'Telefonunuz';
    i18n.en['form.select_freight'] = 'Select A Freight';
    i18n.tr['form.select_freight'] = 'Bir Taşıma Seçin';
    i18n.en['form.special_note'] = 'Special Note';
    i18n.tr['form.special_note'] = 'Özel Not';
    i18n.en['btn.submit'] = 'Submit';
    i18n.tr['btn.submit'] = 'Gönder';
    i18n.en['page.contact_header'] = 'Contact Us';
    i18n.tr['page.contact_header'] = 'İletişim';
    i18n.en['contact.small_title'] = 'Get In Touch';
    i18n.tr['contact.small_title'] = 'İletişime Geçin';
    i18n.en['contact.title'] = 'Contact For Any Query';
    i18n.tr['contact.title'] = 'Herhangi bir soru için iletişime geçin';
    i18n.en['contact.subject_placeholder'] = 'Subject';
    i18n.tr['contact.subject_placeholder'] = 'Konu';
    i18n.en['contact.message_placeholder'] = 'Leave a message here';
    i18n.tr['contact.message_placeholder'] = 'Mesajınızı buraya bırakın';
    i18n.en['contact.send_message'] = 'Send Message';
    i18n.tr['contact.send_message'] = 'Mesaj Gönder';

    function getInitialLang() {
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        if (urlLang) {
            localStorage.setItem('site_lang', urlLang);
            // remove lang param from URL
            history.replaceState(null, '', window.location.pathname + window.location.hash);
            return urlLang;
        }
        return localStorage.getItem('site_lang') || 'en';
    }

    function applyTranslations(lang) {
        if (!i18n[lang]) lang = 'en';
        $('[data-i18n]').each(function () {
            const key = $(this).data('i18n');
            const txt = (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : (i18n['en'][key] || $(this).text());
            $(this).text(txt);
        });
        // placeholders
        $('[data-i18n-placeholder]').each(function () {
            const key = $(this).data('i18n-placeholder');
            const ph = (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : (i18n['en'][key] || '');
            $(this).attr('placeholder', ph);
        });
    }

    // Hook language links (href containing "lang=") to switch without reload
    $(document).on('click', 'a[href*="lang="]', function (e) {
        e.preventDefault();
        const lang = new URL($(this).attr('href'), window.location.href).searchParams.get('lang');
        if (lang) {
            localStorage.setItem('site_lang', lang);
            applyTranslations(lang);
            // close dropdown if open
            $('.dropdown-menu').removeClass('show');
        }
    });

    // Apply initial language on load
    const initialLang = getInitialLang();
    applyTranslations(initialLang);
})(jQuery);


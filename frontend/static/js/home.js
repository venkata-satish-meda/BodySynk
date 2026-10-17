document.getElementById("app").innerHTML = `

<!-- Navigation -->
<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">

        <a class="navbar-brand" href="/">
            BodySynk<span>.</span>
        </a>

        <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMenu">

            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#nutrition">Nutrition</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#faq">FAQs</a>
                </li>
            </ul>

            <div class="d-flex gap-2">
                <a href="/login" class="btn btn-outline-green">
                    Log in
                </a>
                <a href="/register" class="btn btn-green">
                    Get Started
                </a>
            </div>

        </div>
    </div>
</nav>


<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <div class="section-label mb-3">
                    YOUR PERSONAL WELLNESS COMPANION
                </div>

                <h1>
                    Understand your body.
                    <span>Find your balance.</span>
                </h1>

                <p class="mt-4">
                    Your health journey is personal.
                    BodySynk helps you understand your daily habits,
                    track your progress, and build a routine that
                    works for you.
                </p>

                <div class="d-flex flex-wrap gap-3 mt-4">
                    <a href="/register" class="btn btn-green">
                        Start Your Journey →
                    </a>

                    <a href="#about" class="btn btn-outline-green">
                        Explore BodySynk
                    </a>
                </div>

                <p class="small mt-4">
                    Simple habits. Better awareness. Your own pace.
                </p>
            </div>

            <div class="col-lg-6">
                <div class="hero-image-wrap">
                    <img
                        class="hero-image"
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
                        alt="Person practising a wellness routine"
                    >

                    <div class="hero-note">
                        <strong>Small steps matter 🌱</strong>
                        <div class="small text-secondary mt-1">
                            Build habits that fit your life.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- Wellness Topics -->
<div class="topic-strip">
    <div class="container">
        <div class="row g-3">
            <div class="col-6 col-md-3 topic-item">
                🌿 Daily Habits
            </div>
            <div class="col-6 col-md-3 topic-item">
                🥗 Food Awareness
            </div>
            <div class="col-6 col-md-3 topic-item">
                💧 Hydration
            </div>
            <div class="col-6 col-md-3 topic-item">
                🎯 Personal Goals
            </div>
        </div>
    </div>
</div>


<!-- About BodySynk -->
<section id="about" class="dark-section">
    <div class="container">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <img
                    class="dark-image"
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85"
                    alt="Person building a healthy movement routine"
                    loading="lazy"
                >
            </div>

            <div class="col-lg-6">
                <div class="section-label mb-3">
                    A MORE PERSONAL APPROACH
                </div>

                <h2 class="section-title">
                    Your body has a story.
                    Let's understand it.
                </h2>

                <p class="section-description mt-4">
                    Everyone has different routines, preferences,
                    and goals. BodySynk helps you reflect on your
                    habits instead of following a one-size-fits-all plan.
                </p>

                <p class="section-description">
                    Record your daily routine, review your patterns,
                    and discover practical ways to improve consistency.
                </p>

                <a href="/register"
                    class="btn btn-light rounded-pill px-4 py-3 mt-3">
                    Begin with BodySynk →
                </a>
            </div>

        </div>
    </div>
</section>


<!-- Wellness Overview -->
<section>
    <div class="container">

        <div class="text-center mb-5">
            <div class="section-label mb-3">
                YOUR WELLNESS, AT A GLANCE
            </div>

            <h2 class="section-title">
                Make your everyday habits count.
            </h2>

            <p class="section-description mx-auto mt-3">
                Keep your routine in one place and reflect
                on your daily choices.
            </p>
        </div>

        <div class="row g-4">

            <div class="col-md-4">
                <div class="stat-box">
                    <div class="feature-icon">💧</div>
                    <h3>Hydration</h3>
                    <p>
                        Record your water intake and build
                        a consistent hydration habit.
                    </p>
                </div>
            </div>

            <div class="col-md-4">
                <div class="stat-box">
                    <div class="feature-icon">🥗</div>
                    <h3>Food Journal</h3>
                    <p>
                        Keep track of meals, preferences,
                        and your daily eating routine.
                    </p>
                </div>
            </div>

            <div class="col-md-4">
                <div class="stat-box">
                    <div class="feature-icon">🏃</div>
                    <h3>Daily Movement</h3>
                    <p>
                        Note your activities and review
                        your movement habits over time.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- Synki AI -->
<section>
    <div class="container">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <div class="section-label mb-3">
                    MEET YOUR WELLNESS WINGMAN
                </div>

                <h2 class="section-title">
                    A little guidance,
                    whenever you need it.
                </h2>

                <p class="section-description mt-4">
                    Meet Synki, your friendly AI wellness companion.
                    Ask questions about everyday routines and explore
                    simple habit-building ideas.
                </p>

                <p class="section-description">
                    Synki supports general wellness awareness and
                    does not replace qualified medical advice.
                </p>

                <a href="/register" class="btn btn-green mt-3">
                    Meet Synki →
                </a>
            </div>

            <div class="col-lg-6">
                <div class="chat-preview">

                    <div class="chat-heading">
                        <div class="synki-avatar">🍏</div>

                        <div>
                            <h5 class="mb-1">Synki AI</h5>
                            <small class="text-secondary">
                                Your wellness companion
                            </small>
                        </div>
                    </div>

                    <div class="chat-message">
                        Hey there! 🌱 What is one small habit
                        you'd like to work on today?
                    </div>

                    <div class="chat-reply">
                        I want to drink water more regularly.
                    </div>

                    <div class="chat-message">
                        Great place to start! Try keeping a water
                        bottle nearby and recording your intake
                        throughout the day.
                    </div>

                    <div class="mt-4 p-3 rounded-4 bg-light text-secondary small">
                        This is an example conversation, not a live AI chat.
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>


<!-- Features -->
<section id="features" class="bg-white">
    <div class="container">

        <div class="text-center mb-5">
            <div class="section-label mb-3">
                BUILT AROUND YOUR ROUTINE
            </div>

            <h2 class="section-title">
                Everything starts with a habit.
            </h2>

            <p class="section-description mx-auto mt-3">
                Simple tools to help you stay aware of
                the choices you make every day.
            </p>
        </div>

        <div class="row g-4">

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">📊</div>
                    <h3>Personal Dashboard</h3>
                    <p>
                        Review your recorded wellness information
                        in one place.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">🎯</div>
                    <h3>Personal Goals</h3>
                    <p>
                        Set a personal goal to guide your
                        everyday routine.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">📅</div>
                    <h3>Daily Tracking</h3>
                    <p>
                        Record meals, water, activity, sleep,
                        and other daily habits.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">🤖</div>
                    <h3>AI Assistance</h3>
                    <p>
                        Explore general wellness ideas and
                        think through your daily habits.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">📈</div>
                    <h3>Progress Reflection</h3>
                    <p>
                        Review your entries and notice changes
                        in your consistency.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="feature-box">
                    <div class="feature-icon">🌿</div>
                    <h3>Everyday Wellness</h3>
                    <p>
                        Focus on manageable actions rather
                        than expecting perfection.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- Movement -->
<section>
    <div class="container">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <div class="section-label mb-3">
                    MOVE AT YOUR OWN PACE
                </div>

                <h2 class="section-title">
                    Progress isn't about perfection.
                </h2>

                <p class="section-description mt-4">
                    A routine that fits your life is easier to
                    maintain. Record your movement and work toward
                    small, realistic improvements.
                </p>

                <a href="/register" class="btn btn-green mt-3">
                    Create Your Routine →
                </a>
            </div>

            <div class="col-lg-6">
                <img
                    class="dark-image"
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"
                    alt="Person exercising"
                    loading="lazy"
                >
            </div>

        </div>
    </div>
</section>


<!-- Nutrition -->
<section id="nutrition" class="bg-white">
    <div class="container">
        <div class="row align-items-center g-5">

            <div class="col-lg-6">
                <img
                    class="nutrition-image"
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
                    alt="A selection of everyday foods"
                    loading="lazy"
                >
            </div>

            <div class="col-lg-6">
                <div class="section-label mb-3">
                    FOOD AWARENESS
                </div>

                <h2 class="section-title">
                    Understand your daily food routine.
                </h2>

                <p class="section-description mt-4">
                    Record your meals, meal timings, and food
                    preferences to develop a clearer picture
                    of your eating habits.
                </p>

                <p class="section-description">
                    Individual nutritional needs differ.
                    Consult a qualified professional for
                    personalised medical nutrition advice.
                </p>

                <a href="/register" class="btn btn-green mt-3">
                    Start Your Food Journal →
                </a>
            </div>

        </div>
    </div>
</section>


<!-- Call to Action -->
<section class="cta-section">
    <div class="container">
        <div class="cta-box">

            <div class="section-label mb-3">
                YOUR JOURNEY STARTS HERE
            </div>

            <h2>
                Ready to get to know your habits?
            </h2>

            <p class="section-description mx-auto mt-3">
                Begin with a few simple details and build
                awareness of your daily routine.
            </p>

            <a href="/register" class="btn btn-green mt-3">
                Get Started with BodySynk →
            </a>

        </div>
    </div>
</section>


<!-- FAQ -->
<section id="faq" class="bg-white">
    <div class="container">

        <div class="text-center mb-5">
            <div class="section-label mb-3">
                FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 class="section-title">
                Got questions?
            </h2>
        </div>

        <div class="accordion mx-auto" id="faqAccordion"
            style="max-width: 800px;">

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOne"
                        aria-expanded="true"
                        aria-controls="faqOne">
                        What is BodySynk?
                    </button>
                </h2>

                <div id="faqOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        BodySynk is a wellness-focused application
                        designed to help you record daily habits,
                        set personal goals, and reflect on your routine.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqTwo"
                        aria-expanded="false"
                        aria-controls="faqTwo">
                        How does daily tracking work?
                    </button>
                </h2>

                <div id="faqTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        You can record meals, water intake, activity,
                        sleep, and other daily habits. Data-saving
                        features require their own implementation.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqThree"
                        aria-expanded="false"
                        aria-controls="faqThree">
                        Is Synki a medical professional?
                    </button>
                </h2>

                <div id="faqThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        No. Synki is an AI wellness assistant.
                        It does not replace a qualified doctor,
                        dietitian, or other healthcare professional.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqFour"
                        aria-expanded="false"
                        aria-controls="faqFour">
                        Do I need to be a fitness expert?
                    </button>
                </h2>

                <div id="faqFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        No. BodySynk is designed to make everyday
                        habit tracking approachable for beginners.
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- Footer -->
<footer>
    <div class="container">

        <div class="row g-4">

            <div class="col-lg-5">
                <a href="/" class="footer-brand">
                    BodySynk.
                </a>

                <p class="mt-3">
                    A little more awareness.
                    A little more balance.
                    One day at a time.
                </p>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="mb-3">Explore</h6>
                <p><a href="#about">About</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#nutrition">Nutrition</a></p>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="mb-3">Account</h6>
                <p><a href="/login">Log in</a></p>
                <p><a href="/register">Sign up</a></p>
            </div>

            <div class="col-lg-3">
                <h6 class="mb-3">Our Approach</h6>
                <p>
                    Build awareness, develop consistency,
                    and take your wellness journey at your
                    own pace.
                </p>
            </div>

        </div>

        <div class="footer-bottom">
            <p class="mb-2">
                © 2026 BodySynk. All rights reserved.
            </p>

            <p class="small mb-0">
                BodySynk provides general wellness information
                and is not a substitute for professional medical advice.
            </p>
        </div>

    </div>
</footer>

`;
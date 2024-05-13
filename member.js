function skillsMember() {
    var member = document.getElementById('member');
    member.innerHTML = '';
    member.style.display = 'block';
    member.innerHTML = `<div class="member">
    <div class="member__title">
        <h1>Meet the Team</h1>
        <p>Our team is made up of talented and passionate individuals who are dedicated to providing the best services to our clients. We have a combined experience of over 50 years in the industry and have worked with some of the biggest brands in the world.</p>
    </div>
    <div class="member__card">
        <div class="member__card--item">
            <img src="assets/images/member/member1.jpg" alt="member1">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
        </div>
        <div class="member__card--item">
            <img src="assets/images/member/member2.jpg" alt="member2">
            <h3>Jane Doe</h3>
            <p>Marketing Manager</p>
        </div>
        <div class="member__card--item">
            <img src="assets/images/member/member3.jpg" alt="member3">
            <h3>James Doe</h3>
            <p>Senior Developer</p>
        </div>
        <div class="member__card--item">
            <img src="assets/images/member/member4.jpg" alt="member4">
            <h3>Jane Smith</h3>
            <p>Graphic Designer</p>
        </div>
    </div>
</div>`;
}
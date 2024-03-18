function onSearchFocus() {
    var icon = document.getElementById("logo")
    var arrow = document.getElementById("arrow")
    var searchIcon = document.getElementById("searchBarIcon")
    var searchBox = document.getElementById("searchBox")
    searchIcon.style.display = ("none")
    icon.style.opacity = ("0")
    arrow.style.opacity = ("1")
    arrow.style.transform =  ("translateX(-30px)")
    searchBox.style.width = ("250px")
    searchBox.style.left = ("0px")
}

function onSearchBlur() {
    var icon = document.getElementById("logo")
    var arrow = document.getElementById("arrow")
    var searchIcon = document.getElementById("searchBarIcon")
    searchIcon.style.display = ("inline-block")
    icon.style.opacity = ("1")
    arrow.style.opacity = ("0")
    arrow.style.transform =  ("translateX(30px)")
    searchBox.style.width = ("240px")
    searchBox.style.left = ("20px")
}

/* RIGHT UP CORNER MENU (FIRST ICON) */
function showMenu() {
    toggleMenu.style.opacity = '0'
    toggleMenu.style.display = 'none'
    toggleNotifyMenu.style.opacity = '0'
    toggleNotifyMenu.style.display = 'none'
}


/* RIGHT UP CORNER MESSANGER MENU (SECOND ICON) */

function showMessageMenu() {
    toggleMenu.style.opacity = '0'
    toggleMenu.style.display = 'none'
    toggleNotifyMenu.style.opacity = '0'
    toggleNotifyMenu.style.display = 'none'
}



/* RIGHT UP CORNER PROFILE ICON (LAST ICON) */

const toggleMenu = document.querySelector('.slideProfile')

function showSliderMenu() {

    var topRightBtn1 =  document.getElementById('MenuBtn')
    var topRightBtn2 = document.getElementById('MessengerBtn')
    var topRightBtn3 = document.getElementById('NotifyBtn')

    if (toggleMenu.style.opacity === '0') {
        topRightBtn2.classList.remove("activeButton")
        topRightBtn1.classList.remove("activeButton")
        topRightBtn3.classList.remove("activeButton")
        toggleMenu.style.opacity = '1'
        toggleMenu.style.display = 'flex'
        toggleNotifyMenu.style.opacity = '0'
        toggleNotifyMenu.style.display = 'none'
    } else {
        toggleMenu.style.opacity = '0'
        toggleMenu.style.display = 'none'
    }
    
}


/* RIGHT UP CORNER NOTIFICATIONS MENU (THIRD ICON) */


const toggleNotifyMenu = document.querySelector('.slideNotify')

function showNotifyMenu() {
    if (toggleNotifyMenu.style.opacity === '0' || toggleNotifyMenu.style.opacity === '') {
        toggleNotifyMenu.style.opacity = '1'
        toggleNotifyMenu.style.display = 'flex'
        toggleMenu.style.opacity = '0'
        toggleMenu.style.display = 'none'
    } else {
        toggleNotifyMenu.style.opacity = '0'
        toggleNotifyMenu.style.display = 'none'
    }
    
}

function leftScrollOn() {
    let leftSideBar = document.querySelector('.leftTab')
    leftSideBar.style.overflowY = 'scroll'
}

function leftScrollOff() {
    let leftSideBar = document.querySelector('.leftTab')
    leftSideBar.style.overflowY = 'hidden'
}

function showMore() {
    var hiddenIcons = document.querySelectorAll(".hiddenIcons")
    var image = document.querySelector('.showButton')

    hiddenIcons.forEach(function(icon) {
        if (icon.style.display === "none" || icon.style.display === "" || image.src == "./image/down-arrow.png") {
            icon.style.display = "block";
            image.src = "./image/up-arrow.png"
        } else {
            icon.style.display = "none";
            image.src = "./image/down-arrow.png"
        }
    })
}


function makeButtonBlue(event) {
    var object = document.getElementById(event)
    var button1 = document.getElementById('notifyBtn1')
    var button2 = document.getElementById('notifyBtn2')

    if (event) {
        if (event === 'notifyBtn2') {
            if (button2.classList.contains("activeButton")) {
                button2.classList.remove("activeButton")
            } else {
                button2.classList.add("activeButton")
                button1.classList.remove("activeButton")
                if (button1.classList.contains("activeButton")) {
                    button1.classList.remove("activeButton")
                }
               else {
                button1.classList.add("activeButton")
                button2.classList.remove("activeButton")
            }
            }
        }
    }

    var topRightBtn1 =  document.getElementById('MenuBtn')
    var topRightBtn2 = document.getElementById('MessengerBtn')
    var topRightBtn3 = document.getElementById('NotifyBtn')

    if (event) {
        if (event === 'MenuBtn') {
            topRightBtn1.classList.add("activeButton")
            topRightBtn2.classList.remove("activeButton")
            topRightBtn3.classList.remove("activeButton")
        } else if (event === 'MessengerBtn') {
            topRightBtn2.classList.add("activeButton")
            topRightBtn1.classList.remove("activeButton")
            topRightBtn3.classList.remove("activeButton")
        } else if (event === 'NotifyBtn') {
            topRightBtn3.classList.add("activeButton")
            topRightBtn2.classList.remove("activeButton")
            topRightBtn1.classList.remove("activeButton")
        }
    }


    var topButton1 =  document.getElementById('HomeBtn')
    var topIcon1 = document.getElementById('homeIcon4')
    var topButton2 =  document.getElementById('FriendsBtn')
    var topIcon2 = document.getElementById('friendsIcon4')
    var topButton3 =  document.getElementById('VideosBtn')
    var topIcon3 = document.getElementById('videosIcon4')
    var topButton4 =  document.getElementById('GroupsBtn')
    var topIcon4 = document.getElementById('groupsIcon4')

    if (event) {
        if (event === 'HomeBtn') {
            topButton1.classList.add("activeTopPanels")
            topIcon1.classList.add("activeTopButtons")
            topIcon1.classList.remove("btn")
            topButton2.classList.remove("activeTopPanels")
            topButton3.classList.remove("activeTopPanels")
            topButton4.classList.remove("activeTopPanels")
            topIcon2.classList.remove("activeTopButtons")
            topIcon3.classList.remove("activeTopButtons")
            topIcon4.classList.remove("activeTopButtons")
            topIcon3.classList.add("btn")
            topIcon4.classList.add("btn")
            topIcon2.classList.add("btn")
        } else if (event === 'FriendsBtn') {
            topButton2.classList.add("activeTopPanels")
            topIcon2.classList.add("activeTopButtons")
            topIcon2.classList.remove("btn")
            topButton1.classList.remove("activeTopPanels")
            topButton3.classList.remove("activeTopPanels")
            topButton4.classList.remove("activeTopPanels")
            topIcon1.classList.remove("activeTopButtons")
            topIcon3.classList.remove("activeTopButtons")
            topIcon4.classList.remove("activeTopButtons")
            topIcon1.classList.add("btn")
            topIcon3.classList.add("btn")
            topIcon4.classList.add("btn")
        } else if (event === 'VideosBtn') {
            topButton3.classList.add("activeTopPanels")
            topIcon3.classList.add("activeTopButtons")
            topIcon3.classList.remove("btn")
            topButton1.classList.remove("activeTopPanels")
            topButton2.classList.remove("activeTopPanels")
            topButton4.classList.remove("activeTopPanels")
            topIcon1.classList.remove("activeTopButtons")
            topIcon2.classList.remove("activeTopButtons")
            topIcon4.classList.remove("activeTopButtons")
            topIcon1.classList.add("btn")
            topIcon2.classList.add("btn")
            topIcon4.classList.add("btn")
        } else if (event === 'GroupsBtn') {
            topButton4.classList.add("activeTopPanels")
            topIcon4.classList.add("activeTopButtons")
            topIcon4.classList.remove("btn")
            topButton1.classList.remove("activeTopPanels")
            topButton2.classList.remove("activeTopPanels")
            topButton3.classList.remove("activeTopPanels")
            topIcon1.classList.remove("activeTopButtons")
            topIcon2.classList.remove("activeTopButtons")
            topIcon3.classList.remove("activeTopButtons")
            topIcon1.classList.add("btn")
            topIcon3.classList.add("btn")
            topIcon2.classList.add("btn")
        }
    }
} 

function scrollStory(event) {
    var story = document.querySelector('.storyTab')

    if (event === 'scrollStoryLeft') {
        story.scrollLeft -= 100
    } else if (event === 'scrollStoryRight') {
        story.scrollLeft += 100
    }

    
}
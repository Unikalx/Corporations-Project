$(document).ready(function () {
    $('[menu]').click(function () {
        if ($('.menuShow').is(":visible")) {
            $('.menuShow').hide(400);
        } else {
            $(this).parents('.menu').attr('style', ';transition: 1s;');
            $('.menuShow').show(400)
        }
    });
});

$(document).click(function (e) {
    let div = $(".popapTree");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.branch').removeClass('active');
    }
});

countPrice();

function deleteCorporation($this) {
    let id = $this.attr('id');
    $.ajax({
        url: "/delete",
        type: "POST",
        data: {
            id: id
        },
        success: function (date) {
            if (date === 'success') {
                $this = $('#' + id + '');
                if ($this.parents('ul:first').find('li').length == 1) {
                    $this.parents('ul:first').remove()
                } else if ($this.parent().find('li').length != 0) {
                    let $htmlChild = $this.parent().find('ul:first').html();
                    $this.parents('ul:first').append($htmlChild);
                    $this.parent().remove();
                } else {
                    $this.parent().remove()
                }
                countPrice();
            }
        },
        error: function (err) {
            console.log('error')
        }
    });
}

function insertCorporation($this) {
    let id = $this.attr('corporationInsertId');
    let name = $this.find('.modal_name input').val();
    let price = $this.find('.modal_price input').val();
    let error = false;
    if (name.length < 1) {
        $('#insertModal .modal_name input').addClass('error');
        error = true;
    } else {
        $('#insertModal .modal_name input').removeClass('error');
    }
    if (Number(price) > 10000 || price == '') {
        $('#insertModal .modal_price input').addClass('error');
        error = true;
    } else {
        $('#insertModal .modal_price input').removeClass('error');
    }
    if (error == false) {
        $.ajax({
            url: "/insert",
            type: "POST",
            data: {
                id: id,
                name: name,
                price: price
            },
            success: function (date) {
                insertModal(null);
                let content = '';
                let $this = $('#' + id + '');
                if (id == 0) {
                    if ($('.first').find('li').length > 0) {
                        content += '<li class="mainLi">' + renderBranch(date, price, name) + '</li>';
                        $('.first').append(content);
                    } else {
                        content += '<ul class="first"><li class="mainLi">' + renderBranch(date, price, name) + '</li></ul>';
                        $('.tree').append(content);
                    }
                } else {
                    if ($this.parent().find('ul').length > 0) {
                        content += '<li>' + renderBranch(date, price, name) + '</li>';
                        $this.parent().find('ul:first').append(content);
                    } else {
                        content += '<ul>';
                        content += '<li>' + renderBranch(date, price, name) + '</li>';
                        content += '</ul>';
                        $this.parent().append(content);
                    }
                }
                countPrice();
                console.log('success');
            },
            error: function (err) {
                console.log('error')
            }
        });
    }
}

function editCorporation($this) {
    let id = $this.attr('corporationid');
    let name = $this.find('.modal_name input').val();
    let price = $this.find('.modal_price input').val();
    let error = false;
    if (name.length < 1) {
        $('#editModal .modal_name input').addClass('error');
        error = true;
    } else {
        $('#editModal .modal_name input').removeClass('error');
    }
    if (Number(price) > 10000 || price == '') {
        $('#editModal .modal_price input').addClass('error');
        error = true;
    } else {
        $('#editModal .modal_price input').removeClass('error');
    }
    if (error == false) {
        $.ajax({
            url: "/update",
            type: "POST",
            data: {
                id: id,
                name: name,
                price: price
            },
            success: function (result) {
                if (result === 'success') {
                    $('#editModal').hide();
                    let data = $('.main').find('#' + id + '');
                    data.find('[name]').hide(500);
                    data.find('[onePrice]').hide(500);

                    setTimeout(function () {
                        data.find('[name]').text(name).show(500);
                        data.find('[onePrice]').text(price).show(500);
                        countPrice();
                    }, 650);

                }
            },
            error: function (err) {
                console.log('error')
            }
        });
    }
}

function editModal($this) {
    if ($('#editModal').is(":visible")) {
        $('#editModal').hide()
    } else {
        $('#editModal').attr('corporationId', $this.attr('id'));
        $('#editModal .modal_name input').val($this.find('[name]').text());
        $('#editModal .modal_price input').val($this.find('[onePrice]').text());
        $('#editModal').show()
    }
}

function insertModal($this) {
    if ($('#insertModal').is(":visible")) {
        $('#insertModal').hide();
        $('#insertModal input').val('');
    } else {
        $('#insertModal').attr('corporationInsertId', $this.attr('id'));
        $('#insertModal').show()
    }
}

function countSinglePrice(id) {
    let $this = $('#' + id + '');
    if ($this.parent().find('ul:first').length != 0 && $this.find('[allPrice]') != $this.find('[onePrice]')) {
        let price = 0;
        $this.parent().find('.branch').each(function () {
            price += Number($(this).find('[onePrice]').text())
        });
        if (Number($this.find('[allPrice]').text()) != Number(price)) {
            $this.find('[allPrice]').hide(500);
            $this.find('[allPrice]').text(price);
            $this.find('[allPrice]').show(500);
        }
    } else {
        if (Number($this.find('[allPrice]').text()) != Number($this.find('[onePrice]').text())) {
            $this.find('[allPrice]').hide(500);
            $this.find('[allPrice]').text($this.find('[onePrice]').text());
            $this.find('[allPrice]').show(500);
        }
    }
}

function countPrice() {
    $('.tree').find('.branch').each(function () {
        countSinglePrice($(this).attr('id'))
    });
}

function renderBranch(id, price, name) {
    return '<div class="branch" id="' + id + '" oncontextmenu="popupMenu($(this));return false">' +
        '    <a href="#" onclick="return false">' +
        '        <div class="price">' +
        '            <div class="price_left">one <span onePrice>' + price + '</span>$</div>' +
        '            <div class="price_right">all <span style="display: none" allPrice></span>$</div>' +
        '        </div>' +
        '        <span name>' + name + '</span>' +
        '    </a>' +
        '    <div class="popapTree">' +
        '        <nav>' +
        '            <p onclick="insertModal($(this).parents(\'.branch\'))"><img src="img/add.png">Добавить' +
        '            </p>' +
        '            <p onClick="editModal($(this).parents(\'.branch\'))"><img src="img/edit.png">Редактировать' +
        '            </p>' +
        '            <p onclick="deleteCorporation($(this).parents(\'.branch\'))"><img src="img/delete.png">Удалить' +
        '            </p>' +
        '        </nav>' +
        '    </div>' +
        '</div>'
}

function popupMenu($this) {
    if ($this.hasClass('active')) {
        $this.removeClass('active')
    } else {
        $('.branch').removeClass('active');
        $this.addClass('active')
    }
}



/**
 * @param {string} s
 * @return {string}
 */
var longestDuplicateSubstring = function (s) {
    let stringObject = {};
    let lds = '';
    let stringLength = 0;
    debugger

    for (let index = 0; index < s.length; index++) {
        let string = ''
        for (let j = index; j < s.length; j++) {
            string += s[j]


            if (string in stringObject) {
                stringObject[string]++;
            } else {
                stringObject[string] = 1;
            }

        }

    }

    for (const key in stringObject) {
        if (key.length > stringLength && stringObject[key] > 1) {
            stringLength = key.length;
            lds = key;
        }
    }
    debugger
    return lds;
}
let zakeeString = "banana"
let banana = "rikgjehlhvyrrohnqrxvzwsinblhxlbfnbvoqipehfhzhklafyyfwxsziwcrqmocoxcepakwmgetlnbiskidivapcqurdbstmlfinobxfyyeqcxgconruuokuxseinsywiziikzcdujsmxljvyzfqxeaxmgajepglxtyjplhokttbzzxlxjocuyazjvfywrdzjarlyjfjlnlsvmsnjsiyybuhjwchcfynulymjjhhyitzcomkahqbjilzqcgjfgwvuvryuzobifjnyuqdesriziqguzghcfcftrkjivylehhkxedkklsdwvmezhlokcyyhteumlcvskizidwwsklpdorqxcrjywuenhjqvtcpmpynjsiblaougocgifksqmdjfyumuutdiyvvcbgihnzvmbvxoesthhxixoyngtstychwwhffdseavyhncaedledetfxvjygculeglytuegadfwsgsgkuurbowcrytwepvsedpzzcihpwnarjmaojxdxoqlmejqxfdordbwnjowofssjzjpfcojynpttmnxexwkpehoxyjsqhdvnmqnqppxjjclbtjahnwhijswjndldgrzkhkjsqqxfknjtdrpkymmbucgcerkbwrbcqlsjonwdcuqqfgrwqsdivdbjtahlyrodsgydiotgnwygficmjlkcidxtggopfuioisxezoyhqirmeyrgjnasqbjdcksfwvbxajtfuhjfvphcwwnhecqbeehimyrsrxxstdnaeyqncxxwfqyrziqnuxafnbbagjnbrsqtzogivzpkzbouqvyuxdfpnikzqsvtaozsopgmvtgaujocwahahzh";
console.log(longestDuplicateSubstring(banana))


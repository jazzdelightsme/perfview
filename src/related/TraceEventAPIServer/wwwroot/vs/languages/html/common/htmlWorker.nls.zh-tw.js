/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.2(d49899a916fd99840f6f9178f2dd06e0e7013646)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.zh-tw",{"vs/base/common/keyCodes":["Windows","Control","Shift","Alt","Command","Windows","Ctrl","Shift","Alt","Command","Windows"],"vs/languages/html/common/htmlTags":["html 元素代表 HTML 文件的根。","head 元素代表文件中繼資料集合。","title 元素代表文件的標題 (Title) 或名稱。作者應該使用可識別其文件的標題 (Title)，即使使用時與上下文無關亦然，例如在使用者的歷程記錄或書籤中，或是在搜尋結果中。文件的標題 (Title) 通常會與其第一個標題 (Heading) 不同，因為第一個標題 (Heading) 在取自內容時不需要獨立。","base 元素允許作者指定用於解析相對 URL 的文件基底 URL，以及指定用於追蹤超連結的預設瀏覽內容名稱。此元素不代表這項資訊以外的其他任何內容。","link 元素允許作者將其文件連結至其他資源。","meta 元素代表各種無法使用 title、base、link、style 及 script 元素表示的中繼資料。","style 元素允許作者在其文件中內嵌樣式資訊。style 元素是樣式處理模型數種輸入的其中一種。此元素不代表使用者的內容。","body 元素代表文件的內容。","article 元素代表文件、頁面、應用程式或網站中的完整或獨立複合項目，而且是原則上可獨立散發或重複使用的項目 (例如以新聞訂閱方式)。這可以是論壇文章、雜誌或報紙文章、部落格項目、使用者提交的註解、互動 Widget 或小工具，或者內容的任何其他獨立項目。每個文章都應該加以識別，一般是包括標題 (h1-h6 元素) 作為 article 元素的子系。","section 元素代表文件或應用程式的一般章節。此內容中的章節是內容的主題群組。每個章節的主題都應該加以識別，一般是包括標題 (h1-h6 元素) 作為 section 元素的子系。","nav 元素代表連結至其他頁面或頁面內各部分的頁面章節: 含有導覽連結的章節。","aside 元素所代表的頁面章節包含與 aside 元素內容無關的內容，而且視為與該內容不同。這類章節通常會以印刷樣式的提要欄位來表示。","h1 元素代表章節標題。","h2 元素代表章節標題。","h3 元素代表章節標題。","h4 元素代表章節標題。","h5 元素代表章節標題。","h6 元素代表章節標題。","header 元素代表其最近上階章節內容或章節根元素的介紹內容。頁首通常會包含一組介紹或導覽輔助。當最近的上階章節內容或章節根元素是 body 元素時，其會套用至整頁。","footer 元素代表其最近上階章節內容或章節根元素的頁尾。頁尾通常會包含其章節的資訊，例如作者、相關文件連結、著作權資料等等。","address 元素代表其最近 article 或 body 元素上階的連絡人資訊。如果這是 body 元素，則連絡人資訊會整個套用至文件。","p 元素代表段落。","hr 元素代表段落層級主題中斷 (例如劇本中的場景變更)，或參考書章節內另一個主題的轉場。","pre 元素代表預先格式化的文字區塊，其中的結構是以印刷樣式慣例來表示，而非元素。","blockquote 元素代表從另一個來源引用的內容，選擇性地具有必須在 footer 或 cite 元素內的引文，以及選擇性地具有內嵌變更，例如註釋和縮寫。","ol 元素代表項目清單，其中的項目已刻意排序，因此變更順序將會變更文件的意義。","ul 元素代表項目清單，而且項目順序不重要; 亦即，變更順序將不會實質上變更文件的意義。","li 元素代表清單項目。如果其父元素是 ol、ul 或 menu 元素，則依照這些元素的定義，該元素會是父元素清單的項目。否則，清單項目不會定義清單與任何其他 li 元素的相關關聯性。","dl 元素代表由零個以上名稱/值群組所組成的相關聯清單 (描述清單)。名稱/值群組由一個或多個名稱 (dt 元素) 所組成，且該名稱後面接著一個或多個值 (dd 元素)，並忽略任何 dt 和 dd 元素以外的節點。在單一 dl 元素內，一個名稱不應該有多個 dt 元素。","dt 元素代表描述清單中詞彙/描述群組的詞彙或名稱部分 (dl 元素)。","dd 元素代表描述清單中詞彙/描述群組的描述、定義或值部分 (dl 元素)。","figure 元素代表一些流程內容 (選擇性地具有標題)，其為獨立的 (例如完整句子)，而且通常作為文件主要流程的單一單位參照。","figcaption 元素代表 figcaption 元素的父 figure 元素 (如果有的話) 其餘內容的標題或圖例。","main 元素代表文件或應用程式本文的主要內容。主要內容區域包含與文件中心主題或應用程式中心功能直接相關或據此展開的內容。","div 元素根本沒有特殊意義。其代表其子系，可以搭配 class、lang 和 title 屬性使用，以標記一組連續元素通用的語意。","如果元素具有 href 屬性，則代表其內容所標示的超連結 (超文字錨點)。","em 元素代表其內容的強調項目。","strong 元素代表其內容的強烈重要性、嚴重性或緊急性。","small 元素代表側邊註解，例如小型列印。","s 元素代表不再正確或不再相關的內容。","cite 元素代表創意工作的參照。其必須包括工作標題或作者名稱 (人員或組織)、URL 參照，或是根據用於新增引文中繼資料的慣例而可能為縮寫形式的參照。","q 元素代表從另一個來源引用的一些片語內容。","dfn 元素代表詞彙的定義執行個體。dfn 元素最近上階的段落、描述清單群組或章節也必須包含 dfn 元素所指定詞彙的定義。","abbr 元素代表縮寫或縮略字，選擇性地具有其展開項目。title 屬性可用來提供縮寫的展開項目。此屬性 (如果指定的話) 只能包含縮寫的展開項目。","ruby 元素允許以拼音註釋標記一段或多段片語內容。拼音註釋是出現在基本文字旁的一小段文字，主要用於東亞印刷樣式中作為發音指南或包含其他註釋。在日文中，這種形式的印刷樣式又稱為假名註解。拼音文字可出現在基本文字的任一側，有時會出現在兩側，而且可以使用 CSS 來控制其位置。＜Use Cases & Exploratory Approaches for Ruby Markup＞文件及＜CSS Ruby Module Level 1＞中可以找到更完整的拼音簡介。[RUBY-UC] [CSSRUBY]","rb 元素會標記拼音註釋的基本文字元件。當此元素是 ruby 元素的子系時，其本身沒有任何意義，但其父 ruby 元素會使用此元素來決定其代表的意義。","rt 元素會標記拼音註釋的拼音文字元件。當此元素是 ruby 元素的子系，或是其本身為 ruby 元素子系的 rtc 元素子系時，其本身沒有任何意義，但其上階 ruby 元素會使用此元素來決定其代表的意義。","rp 元素可在使用者代理程式不支援拼音註釋時，用於提供使用者代理程式所要顯示的後援文字。常用的慣例之一是在拼音註釋的拼音文字元件前後加上括號。","time 元素代表其內容，以及 datetime 屬性中那些內容的電腦可讀取形式。這類型的內容限制為各種類型的日期、時間、時區位移和期間 (如下所述)。","code 元素代表電腦程式碼的片段。這可以是 XML 元素名稱、檔案名稱、電腦程式，或電腦可以辨識的任何其他字串。","var 元素代表變數。這可以是數學運算式或程式設計內容中的實際變數、代表常數的識別碼、識別實體數量的符號、函式參數，或只是當做文章中的預留位置使用的詞彙。","samp 元素代表從另一個程式或運算系統的範例或引用輸出。","kbd 元素代表使用者輸入 (一般是鍵盤輸入，不過也可以用來代表其他輸入，例如語音命令)。","sub 元素代表下標。","sup 元素代表上標。","i 元素代表替代語音或狀態中的一段文字，或是偏離一般用法以指出不同文字品質，例如分類指定、技術詞彙、另一種語言的習慣用語、字譯、想法或西方文字的船名。","b 元素代表因實用性而受到注意，但未傳達任何額外重要性且不表示替代語音或狀態的一段文字，例如文件摘要中的關鍵字、評論中的產品名稱、互動文字所驅動軟體中的動作文字，或文章提示。","u 元素代表一段文字，其具有模糊但明確呈現的非文字註釋，例如以中文文字將文字標示為正確名稱 (中文正確名稱標記)，或將文字標示為拼錯。","mark 元素代表基於其在另一個內容中的相關性，而標記或反白顯示以供參照的一份文件中的一段文字。用於引文或從文章中參照的其他文字區塊時，指出因為原始作者在一開始撰寫區塊時可能未視為重要所以一開始不存在的反白顯示，但現在受到先前非預期監督而予以新增讓讀者注意到某文字部分。用於文件的主要內容時，指出已基於其與使用者目前活動的可能相關性來反白顯示文件的一部分。","bdi 元素代表基於雙向文字格式而與所圍住項目隔離的一段文字。[BIDI]","bdo 元素代表其子系的明確文字方向格式控制。其允許作者透過明確地指定方向覆寫來覆寫 Unicode 雙向演算法。[BIDI]","span 元素本身沒有任何意義，但搭配全域屬性 (例如 class、lang 或 dir) 使用時可能會很有用。它代表其子系。","br 元素代表分行符號。","wbr 元素代表分行符號機會。","ins 元素代表新增至文件。","del 元素代表從文件中移除。","picture 元素是一個容器，提供所包含 img 元素的多個來源，以便讓作者根據螢幕像素密度、檢視區大小、影像格式和其他因素，以宣告方式來控制有關所要使用影像資源的提示或將其提供給使用者代理程式。它代表其子系。","img 元素代表影像。","iframe 元素代表巢狀瀏覽內容。","embed 元素提供外部 (一般是非 HTML) 應用程式或互動內容的整合點。","object 元素可以代表外部資源，而根據資源的類型，外部資源將視為影像、巢狀瀏覽內容或要由外掛程式處理的外部資源。","param 元素可定義 object 元素所叫用外掛程式的參數。其本身沒有任何意義。","video 元素用於播放視訊或影片，以及具有字幕的音訊檔案。","audio 元素代表聲音或音訊資料流。","source 元素允許作者指定 media 元素的多個替代媒體資源。其本身沒有任何意義。","track 元素允許作者指定 media 元素的明確外部計時文字播放軌。其本身沒有任何意義。","map 元素與 img 元素以及任何 area 元素子系一起使用，以定義影像地圖。此元素代表其子系。","area 元素代表一些文字的超連結以及影像地圖上的對應區域，或影像地圖上的無效區域。","table 元素以資料表形式表示具有多個維度的資料。","如果 caption 元素具有父代且其為 table 元素，則 caption 元素代表其父資料表的標題。","如果 colgroup 元素具有父代且其為 table 元素，則 colgroup 元素代表其父資料表中的一組一個或多個資料行。","如果 col 元素具有父代且其為本身父代為 table 元素的 colgroup 元素，則 col 元素代表該 colgroup 所代表資料行群組中的一個或多個資料行。","如果 tbody 元素具有父代且其為資料表，則 tbody 元素所代表的資料列區塊包含父 table 元素的資料本文。","如果 thead 元素具有父代且其為資料表，則 thead 元素所代表的資料列區塊包含父 table 元素的資料行標籤 (頁首)。","如果 tfoot 元素具有父代且其為資料表，則 tfoot 元素所代表的資料列區塊包含父 table 元素的資料行摘要 (頁尾)。","tr 元素代表資料表中的一列儲存格。","td 元素代表資料表中的資料格。","th 元素代表資料表中的標題儲存格。","form 元素代表 form 相關元素的集合，其中有一些 form 相關元素又能代表可以提交到伺服器進行處理的可編輯值。","label 元素代表使用者介面中的標題。透過使用 for 屬性，或將表單控制項放入 label 元素本身，標題就可以與特定表單控制項 (稱為 label 元素的已標示控制項) 建立關聯。","input 元素代表具類型資料欄位，通常會有允許使用者編輯資料的表單控制項。","button 元素代表其內容所標示的按鈕。","select 元素代表用於從一組選項中進行選取的控制項。","datalist 元素代表一組 option 元素，其代表其他控制項的預先定義選項。在呈現時，datalist 元素沒有任何意義，而且應該與其子系一起隱藏。","optgroup 元素代表一組具有通用標籤的 option 元素。","option 元素代表 select 元素中的選項，或是 datalist 元素中建議清單的一部分。","textarea 元素代表元素原始值的多行純文字編輯控制項。控制項的內容代表控制項的預設值。","output 元素代表應用程式執行的計算結果，或使用者動作的結果。","progress 元素代表工作的完成進度。進度可以是不定，表示正在進行但不清楚在工作完成前還剩下多少工作需要完成 (例如因為工作等待遠端主機回應)，也可以是零到最大值之間的數字，並提供到目前為止完成的工作部分。","meter 元素代表已知範圍內的純量度量，或分數值; 例如，磁碟使用量、查詢結果相關性，或已選取特定候選項目的投票母體部分。","fieldset 元素代表一組選擇性地利用一般名稱分組的表單控制項。","legend 元素代表 legend 元素的父 fieldset 元素 (如果有的話) 其餘內容的標題。","details 元素代表揭露 Widget，使用者可以從中取得其他資訊或控制項。","summary 元素代表 summary 元素的父 details 元素 (如果有的話) 其餘內容的摘要、標題或圖例。","dialog 元素代表應用程式的一部分，使用者會與之互動以便執行工作，例如對話方塊、檢查或視窗。","script 元素允許作者在其文件中包括動態指令碼和資料區塊。此元素不代表使用者的內容。","noscript 元素在啟用指令碼時沒有任何意義，而在停用指令碼時則代表其子系。其可用來將不同的標記呈現給支援指令碼的使用者代理程式，以及不支援指令碼的使用者代理程式，方法是影響文件的剖析方式。","template 元素用來宣告可透過指令碼複製和插入至文件的 HTML 片段。","canvas 元素提供具有解析度相依點陣圖畫布的指令碼，而這類點陣圖畫布可以用於呈現圖形、遊戲圖形、美工圖案或其他進行中的視覺影像。","核取方塊除了樣式以外，與 HTML 核取方塊輸入並無差異。核取方塊的行為與任何 AngularJS 核取方塊皆同。","ionContent 指示詞提供易於使用的內容區域，可將其設定為使用 Ionic 的自訂捲動檢視，或瀏覽器的內建溢位捲動。","ionItem 的子系",'在某些內容下方加入固定的頁尾列。如果套用 "bar-subfooter" 類別，則也可以是子頁尾 (較高)。','在某些內容上方加入固定的頁首列。如果套用 "bar-subheader" 類別，則也可以是子頁首 (較低)。',"ionContent 或 ionScroll 的子系。每當使用者到達頁面的底部或接近頁面的底部時，ionInfiniteScroll 指示詞可讓您呼叫函式。",'ionInput 僅適用於文字類型的輸入。Ionic 在元件內使用實際的 <input type="text"> HTML 元素搭配 Ionic 文繞圖，更能夠處理使用者經驗和互動功能。',"ionList 的子系。","List 是在幾乎所有行動應用程式中廣泛使用的介面元素，從基本文字到按鈕、切換按鈕、圖示和縮圖等均涵蓋在內。","Modal 是可以暫時移至使用者主要檢視的內容窗格。通常用於進行選擇或編輯項目。","ionNavBar 的子系。可在 ionNavBar 內建立 [返回] 按鈕。當用戶能夠返回目前的瀏覽堆疊時，[返回] 按鈕就會出現。","如果您有 ionNavView 指示詞，也可以建立 <ion-nav-bar>，這將會建立隨著應用程式狀態變更而更新的頂端列。 ","ionNavView 的子系。使用 ionNavButtons 從 ionView 中設定 ionNavBar 上的按鈕。","ionNavView 的子系。ionNavTitle 指示詞從 ionView 範本中以自訂 HTML 取代 ionNavBar 標題文字。","ionNavView 指示詞在應用程式中用於轉譯範本。每個範本都是狀態的一部分。狀態通常對應到 URL，並使用 angular-ui-router 以程式設計方式定義。","ionItem 的子系。在清單項目內建立選項按鈕，當該使用者將項目撥動至左側時，就可以看見該按鈕。",'符合內容的簡單容器，而且無副作用。將 "pane" 類別加入元素中。',"Popover 是浮動於應用程序內容上方的檢視。Popover 提供了呈現或集中使用者資訊的簡易方式。","選項 ionRirective 除了樣式以外，與 HTML 選項輸入並無差異。ionRadio 的行為與 AngularJS 選項輸入相同。","ionContent 或 ionScroll 的子系。可讓您將 pull-to-refresh 加入 scrollView。請將其當作 ionContent 或 ionScroll 元素的第一個子系。","ionItem 的子系。","為內部所有內容建立可捲動的容器。","ionSideMenus 的子系。適用於側邊功能表的容器，與 ionSideMenuContent 指示詞同層級。","ionSideMenus 的子系。適用於主要可見內容的容器，與一或多個 ionSideMenu 指示詞同層級。","適用於側邊功能表和主要內容的容器元素。將主要內容區域從一側拖向另一側，即可切換左側和 (或) 右側功能表。","ionSlideBox 的子系。在滑動方塊內顯示分頁。","滑動方塊為多頁面容器，每個頁面都可在其間撥動或拖曳。","ionSpinner 指示詞提供多種動畫式微調按鈕。","ionTabs 的子系。包含索引標籤的內容。只有在選取了特定索引標籤時，內容才會存在。","透過索引標籤列和一組可在其間切換索引標籤的「頁面」，提供多標籤介面。","ion-title 是會設定 ionNavbar 標題的元件","切換按鈕是動畫開關，可將指定模型繫結到布林值。允許拖曳開關兩極。除此之外，切換按鈕的行為與任何 AngularJS 核取方塊皆同。","ionNavView 的子系。用來檢視內容及任何瀏覽和頁首列資訊的容器。"]});
//# sourceMappingURL=../../../../../min-maps/vs/languages/html/common/htmlWorker.nls.zh-tw.js.map